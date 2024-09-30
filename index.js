import { Bot, InlineKeyboard } from "grammy"

const BOT_TOKEN = process.env['BOT_TOKEN']
const WEB_APP_URL = process.env['WEB_APP_URL']

const bot = new Bot(BOT_TOKEN)

bot.command('start', (ctx) => {
    const keyboard = new InlineKeyboard().webApp('Timecell', WEB_APP_URL)

    const caption =`Привет, ${ctx.from.username}. Добро пожаловать в Timecell!\n\nИнструкция по использованию: \n1.Выделите необходимые ячейки времени в таблице.\n2.Заполните необходимые поля в модальном окне "Добавить"\n3.Нажмите на кнопку "Create" \n4.Ваше время будет сохранено!`;

    return ctx.api.sendMessage(ctx.chat.id, caption, { reply_markup: keyboard, parse_mode: 'HTML' })
})

bot.start()
