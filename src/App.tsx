import Card from "./components/Card"


const App = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-bl from-zinc-800 to-zinc-900 text-white">
      <h1 className="text-3xl font-bold text-center p-5">Card App</h1>
      <div className="flex  flex-wrap  space-x-5 space-y-5  p-10 md:justify-center ">
      
      <Card
        cardInfo={{
          imgLink:"https://imgs.search.brave.com/mcyjQek12VvNpUzmtVqbRBOMAT45wyjuPVYZYnxwmsI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaGJvLmNvbS9j/b250ZW50L2RhbS9o/Ym9kYXRhL3Nlcmll/cy9nYW1lLW9mLXRo/cm9uZXMvY2hhcmFj/dGVyL3M1L2RhZW5h/cnlzLTE5MjAuanBn/P3c9MTIwMA",
          name:"Danareys Targarayen",
          desc:"Queen of the Andals and First Men, Protector of the Seven Kingdoms"
        }}     
      />
          <Card
        cardInfo={{imgLink:"https://imgs.search.brave.com/p1wgiVYaFETzV3GvA6WZU7XUdbtnpmsG6FAQw5JpczY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLnNyY2RuLmNv/bS93b3JkcHJlc3Mv/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvamVubmEtb3J0/ZWdhLWFzLXdlZG5l/c2RheS1hZGRhbXMt/aW4td2VkbmVzZGF5/LmpwZw"
          ,name:"Wednesday Adams",
          desc:"God Gifted Gorgeous Girl"
        }}     
      />
          <Card
        cardInfo={{
          imgLink:"https://imgs.search.brave.com/GgzOPVvsf3P1IF2AeuPovCM7DMwXoedxmJllsRB6TJ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAyL2hhbGJy/YW5kLWFzLXNhdXJv/bi0xLmpwZw"
          ,name:"Dark Lord Sauron"
          ,desc:"Cruel Sorcerer who wants to rule Middle Earth"
        }}     
      />
          <Card
        cardInfo={{
          imgLink:"https://imgs.search.brave.com/Z84Ovu8skNpgLhUADt4IafoaYwNDc_ZYEVb7hk1oV7Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bGFyZXZpZXdvZmJv/b2tzLm9yZy91bnNh/ZmUvMzg0MHgwL2Zp/bHRlcnM6Zm9ybWF0/KGpwZWcpOnF1YWxp/dHkoNzUpL2h0dHBz/Oi8vYXNzZXRzLmxh/cmV2aWV3b2Zib29r/cy5vcmcvdXBsb2Fk/cy8yMDE1MDVnYWxh/ZHJpZWwucG5n"
          ,name:"Galadriel"
          , desc:"Commander of the Northern Armies who wanted to find and kill Sauron"
        }}     
      />
          <Card
        cardInfo={{
          imgLink:"https://imgs.search.brave.com/7ImHXhlG7D2CkrLazOb65Kp1YJIR2qqE2MzONM7MpYU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzViLzg5/Lzg2LzViODk4NmFm/OTE1YmNiZDFhZmNm/ODY3ZjFjZmEyMDYz/LmpwZw"
          ,name:"Jean aka Eleven(El)"
          , desc:"Beautiful girl with supernatural abilities who unintentionally open a gate to  Upside Down"
        }}     
      />
      <Card
      cardInfo={{
        imgLink:"https://imgs.search.brave.com/nxuL1poTRrbmrmR44B7ps3xf2fnZQGgImwX58U3yJos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1qTTJOVFE1/TXpjMk0xNUJNbDVC/YW5CblhrRnRaVGd3/TlRjeE1ESTJOVEVA/LmpwZw"
        ,name:"Ant-Man"
        ,desc:"Super hero from Marvel who can reduce himself to the size of atom"
      }}/>
    </div>
    </div>
    
  )
}

export default App
