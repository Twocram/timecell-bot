import { Bot, InlineKeyboard } from "grammy"

const BOT_TOKEN = process.env['BOT_TOKEN']
const WEB_APP_URL = process.env['WEB_APP_URL']

const bot = new Bot(BOT_TOKEN)

bot.command('start', (ctx) => {
    const keyboard = new InlineKeyboard().webApp('Timecell', WEB_APP_URL)

    const caption =`Привет, ${ctx.from.username}! Вечером пришлю нотификацию заполнить Timecell. Нужно будет заполнить время за сегодня и оно автоматически появится в Notion`;

    return ctx.api.sendMessage(ctx.chat.id, caption, { reply_markup: keyboard, parse_mode: 'HTML' })
})

bot.start()
