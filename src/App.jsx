import Random from './components/Random'
import Tag from './components/Tag'
export default function App() {
  return (
    <div className='w-full min-h-screen flex flex-col gap-5 p-5 items-center background gap-10'>
      <h1 className='w-11/12 bg-white text-4xl font-bold rounded-lg p-3  text-center'>Random Gifs</h1>
      <div className='flex flex-col gap-10'>
        <Random/>
        <Tag></Tag>
      </div>
    </div>
    );
}
