import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Cards'
import Blog from './components/Blogpage'
function App() {
  return (
 
    <div className='h-screen  w-screen bg-white overflow-x-hidden'>
      {/* <div className='h-1/6 w-screen bg-white flex justify-center'>
      <Navbar />
      </div>

      <div className="container mx-auto px-4 py-8">
      <div className='w-screen bg-white flex flex-wrap gap-6'>
      <Card title="Card 1" description="This is the description for Card 1." />
      <Card title="Card 2" description="This is the description for Card 2." />
      <Card title="Card 3" description="This is the description for Card 3." />
      <Card title="Card 4" description="This is the description for Card 4." />
      <Card title="Card 1" description="This is the description for Card 1." />
 
    
      
      
       
      </div>
      </div>

   */}
   <Blog/>
    </div>
   
  );
}

export default App;
