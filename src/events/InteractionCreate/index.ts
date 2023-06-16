import { Event } from '../../types'
import commands from '.././ready'
import help from './help'

const events: Event<any>[] = [
    commands,
    help,
]

export default events
