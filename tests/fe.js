import axios from 'axios'
import * as cheerio from 'cheerio'
// import { load } from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    const courses = []
    $('#fe .card-title').each(function () {
      courses.push(($(this).text().trim()))
    })
    console.log(courses)
  } catch (err) {
    console.log(err)
  }
}
main()
