import Card from "./components/Card";


function App() {

  var data = [
    {
      title : 'Adventure',
      dis   : 'Exciting experiences, exploration, challenges, risk-taking, discovery, thrill, nature, adrenaline, unknown, and journey.',
      img   :  'https://tse2.mm.bing.net/th?id=OIP.5KKSqOuDVD7f2Zsggw5VRwHaEK&pid=Api&P=0&h=220,',
      status: 'success'
    },
    {
      title : 'Tourisum',
      dis   : 'Travel, exploration, leisure, culture, adventure, sightseeing, hospitality, experiences, destinations, and relaxation.',
      img   :  'https://tse1.mm.bing.net/th?id=OIP.T42fAIq5_DcRPtGOieyU2gHaEK&pid=Api&P=0&h=220',
      status: 'warning'

    },
    {
      title : 'Travel',
      dis   : 'Exploration, adventure, journey, discovery, culture, experiences, destinations, movement, excitement, and wanderlust.',
      img   :  'https://tse1.mm.bing.net/th?id=OIP.9_eSFHVP2Xj7Jnzcueh7QQHaEK&pid=Api&P=0&h=220',
      status: 'error'
    }

  ]


  return (
   <div>
   <Card data={data}></Card>
   </div>
  );
}

export default App;
