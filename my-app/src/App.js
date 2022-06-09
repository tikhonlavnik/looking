import React, {useState } from 'react'
// import {CardColumns} from 'reactstrap';
import Header from './components/header';
import Search from './components/search';
import CardItem from './components/cards';
import Footer from './components/footer';
import Navig from './components/Nav';
import RegistrtForm from './components/registrtForm';
import SideSearch from './components/sideSearch';
import MainCard from './components/mainCard';
import HotelPage from './components/hotelPage';
import './index';
import {Nav, NavItem, NavLink , Button} from 'reactstrap'
import LoginForm from './components/loginForm';

function App() {
  
  let [state, setState] = useState('unknown');

  let handleReg = () => {
    setState('reg')
    console.log(state)
  }

  let handleLog = () => {
    setState('log')
    console.log(state)
  }

  let startState = () => {
    setState('unknown')
  }

  // USERSl
  
  let bd

  let [users, setUser] = useState([{login: '', password: ''}])

  let [hotels, setHotel] = useState([
    {img:"https://cf.bstatic.com/xdata/images/landmark/max1024/256029.webp?k=856d203f6407c315e34c1b0c577158dc851d9cff0590b16136e79d913d58386e&o=1", title:"Appartamento Benincampi", desc:"Апартаменты Benincampi расположены в Риме, в историческом здании. С меблированного балкона открывается вид на площадь Пьяцца-Навона. К услугам гостей кондиционер и бесплатный Wi-Fi во всех помещениях. Пол выложен паркетом.Интерьер примечателен оригинальным балочным потолком. В числе удобств — 1 спальня, гостиная/обеденная зона, телевизор с плоским экраном, мини-кухня с микроволновой печью.", price:"1500", loc:"Рим"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/28358732.jpg?k=2b08978b9388b9a9700810ad2ae0485088cfac512699c3960d1d524a477452f7&o=&hp=1", title:"Hotel Giolli Nazionale", desc:"Отель Giolli предлагает большие номера с беспроводным доступом в Интернет, вежливое обслуживание и 24-часовую стойку регистрации. Отель расположен на улице Виа Национале, в нескольких минутах ходьбы от вокзала Термини.Римский Оперный театр и фонтан Треви находятся в нескольких минутах ходьбы от отеля Giolli. Станция метро Repubblica расположена в 200 метрах от отеля.", price:"1800", loc:"Рим"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/256705641.jpg?k=4a615a794231fa9cf1abfd24f273c55f31622cf6ad52654cb7851b6e2796e4b4&o=&hp=1", title:"Palazzo Delle Pietre", desc:"Апарт-отель Palazzo Delle Pietre - Luxury Apartments расположен в Риме, недалеко от площади Пьяцца Навона, Пантеона и площади Торре-Арджентина. Предоставляется бесплатный Wi-Fi.В распоряжении гостей апартаменты с кондиционером, сейфом и посудомоечной машиной. В апартаментах есть гостиная с телевизором с плоским экраном.", price:"2200", loc:"Рим"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/31939984.jpg?k=ff3ded10f7f898f3371e82ec613e078e9d2e8bfed88b853844d598cc1552504a&o=&hp=1", title:"Hotel Abitart", desc:"Дизайн-отель Abitart находится в самом центре района Остиенсе, недалеко от железнодорожного вокзала и станции метро Остиенсе, откуда можно быстро добраться до любых районов Рима, включая аэропорт Фьюмичино.Элегантные номера отеля Abitart оформлены в индивидуальном художественном стиле. В каждом из них можно посмотреть программы спутникового телевидения и воспользоваться бесплатным Wi-Fi.", price:"2700", loc:"Рим"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/343341268.jpg?k=df7ef42c5e047da1e65c11792e3bb288f554351253caf240ed3e19d74fe6cd80&o=&hp=1", title:"Hotel Lutetia", desc:"Знаменитый роскошный отель Lutetia расположен в районе Сен-Жермен-де-Пре, на левом берегу Сены, в 5 минутах ходьбы от универмага Le Bon Marché и в 2 км от музея Лувр.Этот отель с 184 современными номерами, в том числе 40 люксами и 7 фирменными люксами, стал одной из «визитных карточек» Парижа. ", price:"2500", loc:"Париж"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/230130456.jpg?k=ef6a5e6f339a2cdb737e1cbbb9d27a74a3ebeb92e4f5165a9822f7be47e51fe8&o=&hp=1", title:"Holiday Inn Paris Gare de l'Est, an IHG Hotel", desc:"Отель Holiday Inn Paris Gare De l'Est расположен напротив Восточного вокзала и одноименной станции метро (Gare de l’Est), откуда можно без пересадок доехать до таких достопримечательностей, как площадь Сен-Мишель и Латинский квартал. К услугам гостей лобби-бар с витражными окнами.", price:"1900", loc:"Париж"},
    {img:"https://cf.bstatic.com/xdata/images/landmark/max1024/176763.webp?k=a7f5bfbbb9f99a7d712a407b5fb87dd653285dcea80a33e01f5d4bf0166d0d08&o=1", title:"Hotel de L'Esperance", desc:"Отель De L'Esperance расположен в Париже, в 2 минутах ходьбы от оживленной улицы Муфтар. В числе удобств внутренний двор. До площади Монж и Латинского квартала можно дойти от отеля за 10 минут. Предоставляется бесплатный Wi-Fi на всей территории.", price:"2700", loc:"Париж"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/239424439.jpg?k=21e9cc034d96831a11690a7a05753e1d616c99f9e77bce0a13064fe8b516e343&o=&hp=1", title:"Citadines Saint-Germain-des-Prés Paris", desc:"Апарт-отель Citadines Saint-Germain-des-Prés Paris находится в центре Парижа, в 10 минутах ходьбы от собора Парижской Богоматери и в 300 метрах от станции метро Saint-Michel. К услугам гостей фитнес-зал и бесплатный WiFi.", price:"2400", loc:"Париж"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/230213553.jpg?k=a28b89e2d090714fcbf23e27d10958d2813241cdac5fc986523fccdd4ee418b4&o=&hp=1", title:"Tate Modern River View", desc:"Апартаменты Tate Modern River View с видом на реку, балконом и чайником расположены в 1,2 км от рынка Боро. К услугам гостей терраса и бесплатный Wi-Fi. Из окон открывается вид на город.", price:"2100", loc:"Лондон"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/339532965.jpg?k=b7162fa8de3a71066888ca02e92b452e235e49b254d883cc0d14391e493c5ccc&o=&hp=1", title:"Nobu Hotel London Portman Squar", desc:"Современный отель расположен в лондонском районе Вест-Энд, всего в 5 минутах ходьбы от улицы Оксфорд-стрит и Гайд-парка. К услугам гостей номера с кондиционером и бесплатным Wi-Fi, ресторан интернациональной кухни, фитнес-центр и открытая терраса.", price:"1900", loc:"Лондон"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/244157808.jpg?k=1527f990fb840eeca59904a1db6e7913c8297b58f8413d502c6a77409313284b&o=&hp=1", title:"Mayfair Piccadilly Apartment", desc:"Во всех апартаментах есть телевизор с плоским экраном, полностью оборудованная кухня с посудомоечной машиной, а также собственная ванная комната с ванной, бесплатными туалетно-косметическими принадлежностями, духовкой, микроволновой печью, тостером, кофемашиной и чайником.", price:"2400", loc:"Лондон"},
    {img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/343917485.jpg?k=55c62e675f53fa9d4864b430a596687b55a06f165044cb7de21e53a4fc8cca3a&o=&hp=1", title:"One Hundred Shoreditch", desc:"Дух независимости в богемном центре развивающегося района Шордич. Отель One Hundred Shoreditch расположен на видном месте на Шордич-Хай-стрит.", price:"1800", loc:"Лондон"},

  ])

  // let y = hotels.map()


  let regUser = () => {
    setUser([...users, {login: inp1, password: inp2}])
    setLog('')
    setPass('')
    setState('rg')

  }  

  let [inp1, setLog] = useState();
  let [inp2, setPass] = useState();

  let setLg = event => {
    inp1 = event.target.value;
    setLog(inp1)
    // console.log(inp1)
  }

  let setPs = event => {
    inp2 = event.target.value;
    setPass(inp2)
    // console.log(inp2)
  }

  // LOGIN

  let [person, setPerson] = useState(false)

  let logUser = () => {
    users.forEach(item => {
      // console.log(inp1, inp2, item, item.password == inp2 && item.login == inp1)
      if (item.password == inp2 && item.login == inp1) {
        setState('logged')
        setPerson(true)
      } else {
        setState('unvLogAndPass')
        return null

        // alert("Неправильный логин или пароль")
      }
    })
  }


  let findHotel = () => {
    setState('fh')
  }

  let x = (el) => { return <div className='row'>
  <div className=' mc-div'>
  <div className='col-3'>
    <SideSearch city={searchSt} setCity={setCity}/>
  </div>
  <div className='col-9'>
    <div className='x'>
      <h3>Найдено вариантов в Европе:</h3>
      {el}
    </div>
  </div>
  </div>
  </div>}
  
  let [PAGE, SETPAGE] = useState({})

  let handleCheck = (id) => {
    let hotel =  hotels.filter(item => item == id)
    // console.log(hotel[0].title)
    setState('onHotel')
    SETPAGE(hotel[0])
    console.log(PAGE)
  }

  let handleOutLog = () => {
    setPerson(false)
    alert("Вы вышли из аккаунта")
    setState('unknown')
  }

  let handleBack = () => {
    setState('logged')
  }

// console.log(x)

let [myHotels, setMyHotel] = useState([])

let addHotel = (id) => {
  if (person) {
    // myHotels.forEach(hot => {
      // console.log(1)
      // console.log(myHotels.find(item => item !== id) == -1)
      let j = 0
      console.log(myHotels.length)
      console.log(j)
      for (let i = 0; i < myHotels.length; i++) {
        if (id !== myHotels[i]) {
          console.log(j)
        } else {
          j +=1
        }
      }
      console.log(j)
      if (j == 1) {
        alert("Вы уже забронировали эту недвижимость")
      } else {
        let hotel = hotels.filter(item => item == id)
        // console.log(hotel[0])
        setMyHotel([...myHotels, hotel[0]])
        setState('fh')
        alert("Отель забронирован")
      }
      
      
    // })
      
    
  } else {
    alert("Войдите или зарегистрируйтесь!")
  }
}

let handleMyOrders = () => {
  // console.log("inMyacc")
  setState('myAcc')

}

// INPUTS

let [searchSt, setSearchSt] = useState('')
// let [searchInp, setSearchInp] = useState('')

// ТРЕШ СО СТЕЙТАМИ

let setCity = (event) => {
  console.log(event.currentTarget.innerText)
  setSearchSt(event.currentTarget.innerText)
  // setSearchSt(event.target.value)
  setState('search')
  if (event.currentTarget.innerText == 'Показать все') setState('fh')

}

// let showHotels = () => {
//   // console.log(searchSt)
//   console.log(searchInp)
//   // setSearchSt(searchInp)
//   console.log(searchSt)
//   // if (searchInp !== "Рим" || "Париж" || "Лондон") {
//   if (searchInp == "Рим") {
//     console.log(1)
//     setState('search')
//     // setSearchInp('')
//   } else if (searchInp == "Париж") {
//     console.log(2)
//     setState('search')

//   } else if (searchInp == "Лондон") {
//     console.log(3)
//     setState('search')
    
//   } else {
//     console.log(5)
//     // console.log("im here")
//     setState('fh')
//   }
// }


let handleDel = (id) => {
  setMyHotel(myHotels.filter(item => item != id))
}

  if(state === 'unknown') {
     bd = <>
        <Header handleMyOrders={handleMyOrders} handleReg={handleReg} findHotel={findHotel} handleLog={handleLog} startState={startState} person={person}/>
        <Search/>
        <div className='cont-adv'>
          <h3>Европа - путешествуйте с удовольствием!</h3>
          <h5>В этих популярных местах вы точно найдете что-то для себя</h5>
        </div>
        <div className='card-row'>
          {/* Добавить сюда нажатие на Забронировать */}
          <div className='col-3 cd'><CardItem img="https://cf.bstatic.com/xdata/images/landmark/max1024/256029.webp?k=856d203f6407c315e34c1b0c577158dc851d9cff0590b16136e79d913d58386e&o=1" title="Appartamento" price="1500"/></div>
          <div className='col-3 cd'><CardItem img="https://cf.bstatic.com/xdata/images/hotel/max1280x900/28358732.jpg?k=2b08978b9388b9a9700810ad2ae0485088cfac512699c3960d1d524a477452f7&o=&hp=1" title="Hotel Giolli " price="1800"/></div>
          <div className='col-3 cd'><CardItem img="https://cf.bstatic.com/xdata/images/hotel/max1280x900/256705641.jpg?k=4a615a794231fa9cf1abfd24f273c55f31622cf6ad52654cb7851b6e2796e4b4&o=&hp=1" title="Palazzo Delle Pietre" price="2000"/></div>
          <div className='col-3 cd'><CardItem img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/31939984.jpg?k=ff3ded10f7f898f3371e82ec613e078e9d2e8bfed88b853844d598cc1552504a&o=&hp=1" title="Hotel Abitart" price="1200"/></div>
        </div>
      </>
  } else if (state === 'reg') {
    bd = <RegistrtForm regUser={() => regUser} setLg={() => setLg} setPs={() => setPs} inp1={inp1} inp2={inp2}/>
  } else if (state === 'log') {
    bd = <LoginForm logUser={() => logUser} setLg={() => setLg} setPs={() => setPs} inp1={inp1} inp2={inp2} />
  } else if (state == 'rg') {
    bd = <div className='com-div'><h2>Вы успешно зарегистрировались!<br/>Войдите в аккаунт</h2></div>
  } else if (state == 'fh') {
    bd = x(hotels.map((item, i) => {
      return <MainCard key={i} id={i} className='card-item' img={item.img} price={item.price} desc={item.desc} title={item.title} handleCheck={() => {handleCheck(item)}}/>
    }))
  }else if (state == 'logged') {
    bd = x(hotels.map((item, i) => {
      return <MainCard key={i} id={i} className='card-item' img={item.img} price={item.price} desc={item.desc} title={item.title} handleCheck={() => {handleCheck(item)}}/>
      // <p>hi</p>
    }))
  } else if (state == 'onHotel') {
    return bd = <><div className='cont'>
    <Navig handleMyOrders={handleMyOrders} handleReg={handleReg} handleLog={handleLog} handleOutLog={handleOutLog} startState={startState} person={person}/>
    <div className='row'>
    <div className=' mc-div'>
    <div className='col-3'>
      <SideSearch city={searchSt} setCity={setCity}/>
    </div>
    <div className='col-9'>
      <div className='x'>
        {<HotelPage addHotel={() => addHotel(PAGE)} handleBack={handleBack} img={PAGE.img} price={PAGE.price} desc={PAGE.desc} title={PAGE.title} handleDel={handleDel}/>}
        {/* <div> {PAGE.price} {PAGE.desc} {PAGE.title}</div> */}
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/></>
  } else if (state == 'myAcc') {
    bd =  <><div className='cont'>
    <div className='row'>
    <div className=' mc-div'>
    <div className='col-3'>
      <SideSearch setCity={setCity}/>
    </div>
    <div className='col-9'>
      <h2>Мои бронирования:</h2>
      <div className='x'>
        {myHotels.map((item, i) => {
          // {console.log(myHotels)}
          return <MainCard key={i} id={i} className='card-item' img={item.img} price={item.price} desc={item.desc} del={1} title={item.title} handleDel={() => {handleDel(item)}}/>
        })}
      </div>
    </div>
    </div>
    </div>
    </div>
    {/* <Footer/> */}
    </>
  } else if (state == 'unvLogAndPass'){
    bd= <>
    <div className='mc-div'><h2>Неправильный логин или пароль</h2></div>
  <LoginForm logUser={() => logUser} setLg={() => setLg} setPs={() => setPs} inp1={inp1} inp2={inp2} />
  </>
  } else if (state == 'search') {
    return bd = <><div className='cont'>
    <Navig handleMyOrders={handleMyOrders} handleReg={handleReg} handleLog={handleLog} handleOutLog={handleOutLog} startState={startState} person={person}/>
    <div className='row'>
    <div className=' mc-div'>
    <div className='col-3'>
      {/* <SideSearch showHotels={showHotels} setCity={() => setCity} searchInp={searchInp}/> */}
      <SideSearch city={searchSt} setCity={setCity} />
    </div>
    <div className='col-9'>
      <div className='x'>
        {/* {<HotelPage addHotel={() => addHotel(PAGE)} handleBack={handleBack} img={PAGE.img} price={PAGE.price} desc={PAGE.desc} title={PAGE.title} handleDel={handleDel}/>} */}
        {hotels.map((item,i) => {
          // console.log(item.loc == searchSt)
          if (item.loc === searchSt) {
            // return <h1>Yes</h1>
            return <MainCard key={i}  className='card-item' img={item.img} price={item.price} desc={item.desc} title={item.title} handleCheck={() => {handleCheck(item)}}/>
          }
        })}
      </div>
    </div>
    </div>
    </div>
    </div>
    <Footer/></>
  } else if (state == 'out') {
  //   bd = x(hotels.map((item, i) => {
  //     return <MainCard key={i} id={i} className='card-item' img={item.img} price={item.price} desc={item.desc} title={item.title} handleCheck={() => {handleCheck(item)}}/>
  //   }))
  console.log("hello")
  }
  

  // {console.log(state)}

  return (
      <>
        <div className='cont'>
          <Navig handleOutLog={handleOutLog} handleMyOrders={handleMyOrders} handleReg={handleReg} handleLog={handleLog} startState={startState} person={person}/>
          {bd}
        </div>
        <Footer/>
      </>
  );
}



export default App;
