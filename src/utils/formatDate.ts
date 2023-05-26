import moment from 'moment'

export default (date?: number) => {
  if (date) {
    return moment(new Date(date)).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return moment().format('YYYY-MM-DD HH:mm:ss')
  }
}
