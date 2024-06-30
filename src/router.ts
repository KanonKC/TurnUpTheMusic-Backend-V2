import fastify from "fastify";
import { 
    createPlaylistView, 
    getAllPLaylistsView, 
    getPlaylistWithCurrentVideoByIdView,
    playIndexView,
    playNextView,
    playPreviousView,
    playAlgorithmView,
} from "./views/playlist";
import { addVideoToQueueView, clearQueueInPlaylistView, deleteQueueByIdView, getAllQueuesInPlaylistView, getQueueByIdView, increaseQueuePlayedCountView } from "./views/queue";
import cors from '@fastify/cors'

const server = fastify()
server.register(cors, { 
    origin: '*'
})

server.get('/playlists', getAllPLaylistsView)
server.post('/playlists', createPlaylistView)
server.get('/playlists/:playlistId', getPlaylistWithCurrentVideoByIdView)
server.put('/playlists/:playlistId/play/index/:indexNo', playIndexView)
server.put('/playlists/:playlistId/play/next', playNextView)
server.put('/playlists/:playlistId/play/prev', playPreviousView)
server.put('/playlists/:playlistId/play/algorithm', playAlgorithmView)

server.get('/playlists/:playlistId/queues', getAllQueuesInPlaylistView)
server.post('/playlists/:playlistId/queues', addVideoToQueueView)
server.delete('/playlists/:playlistId/queues', clearQueueInPlaylistView)

server.get('/queues/:queueId', getQueueByIdView)
server.delete('/queues/:queueId', deleteQueueByIdView)

server.put('/queues/:queueId/increment', increaseQueuePlayedCountView)

export default server