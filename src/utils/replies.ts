import exp from "constants"
import {
    InteractionReplyOptions,
    WebhookMessageEditOptions,
} from "discord.js"

export const Colors = {
    error: 0xB3202C,
}

export const Reply = {
    error(msg: string): InteractionReplyOptions {
        return {
            ephemeral: true,
            embeds: [{
                color: Colors.error,
                description:msg
            }]
        }
    }
}

export const EditReply = {
    error(msg: string): WebhookMessageEditOptions {
        return {
            embeds: [{
                color: Colors.error,
                description:msg
            }]
        }
    }
}

