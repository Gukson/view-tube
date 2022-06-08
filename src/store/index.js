import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    currentFilm: {},
    movies: [],
    users: [],
    API_key: process.env.VUE_APP_STORED_API_KEY
  },
  getters: {
  },
  mutations: {
    changeCurrentFilm(state, {film}) {
      // console.log(film)
      state.currentFilm = film
    },
    // dodaj coś do state
    setInState(state, {elem, location}){
      // wepchnij każdy argument z pozyskanego zapytania do state
      // array.forEach(x => state[location].push(x))
      // wrzuć element do listy w state
      state[location].push(elem)
    },
    purgeState(state, { toPurge }) {
      state[toPurge] = []
    }
  },
  actions: {
    // stwórz object, który łączy dane o filmie i kanale
    async getMovieDetails({state, commit}, {id, getCurrent = false}) {
      try {
        // request by dostać konkretny film
        const resp = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${state.API_key}`);
        // stworzenie obiektu z potrzebnymi danymi
        if (resp.data.items[0] === undefined) {
          return
        }
        const film =  {
          id: id,
          publishedAt: resp.data.items[0].snippet.publishedAt,
          channelId: resp.data.items[0].snippet.channelId,
          title: resp.data.items[0].snippet.title,
          filmPhoto: resp.data.items[0].snippet.thumbnails.medium.url,
          description: resp.data.items[0].snippet.description,
          statistics: resp.data.items[0].statistics
        }
        // request by dostać kanał, który stworzył film
        const sec_res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${film.channelId}&key=${state.API_key}`)
        // commit gdy chcemy dostać pojedynczy film
        getCurrent ? commit('changeCurrentFilm', { film: {...film, channelName: sec_res.data.items[0].snippet.title, channelPhoto: sec_res.data.items[0].snippet.thumbnails.high.url}}) : ''
        // commit, odbywający się zawsze, bo zawsze chcemy dodać do state.movies
        commit('setInState', { elem: {...film, channelName: sec_res.data.items[0].snippet.title, channelPhoto: sec_res.data.items[0].snippet.thumbnails.high.url}, location: 'movies'})
      } catch (err) {
        console.error(err);
      }
    },
    async getListOfMovies({dispatch}, {link}) {
      // dostań filmy, jedna lista
      let results = ''
      await axios.get(link
      ).then(response => {
        // // rezultat to lista z wiadomościami o filmie
        results = response.data.items
      })
      await Promise.all(results.map(async function (elem){
        let id = elem.id?.videoId ? elem.id?.videoId : elem.id
        await dispatch('getMovieDetails', {id})
      }))
    },
  },
  modules: {
  }
})
