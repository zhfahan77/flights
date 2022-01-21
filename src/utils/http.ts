import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'

const MAX_AGE_IN_MILISECONDS = 1 * 60 * 1000;

const cache = setupCache({
    maxAge: MAX_AGE_IN_MILISECONDS
})

export const httpClient = axios.create({
    adapter: cache.adapter
})