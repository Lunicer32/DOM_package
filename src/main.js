const div = dom.find('#test>.red')[0]
dom.style(div, 'color', 'red')
    // console.log(dom.style(div, 'color'))
const divList = dom.find('.red')
dom.each(divList, (n) => console.log(n))