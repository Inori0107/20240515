import axios from 'axios'
import * as cheerio from 'cheerio'

export default async (event) => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    // 設定 server 端 Jquery
    const $ = cheerio.load(data)
    const courses = []
    $('#fe .card-title').each(function () {
      courses.push(($(this).text().trim()))
    })
    // event.reply 只能使用一次
    const result = await event.reply(courses)
    if (process.env.DEBUG === 'true') {
      console.log(result)
    }
  } catch (err) {
    console.log(err)
    event.reply('發生錯誤')
  }
}
