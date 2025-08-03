import Header from '@app/features/Header';
import Input from '@app/features/Input';
import TodoList from '@app/features/TodoList';

function App() {
  return (
    <main className='lg:w-3xl md:w-2xl sm:w-xl h-[90%] bg-purple-50 rounded-[4px] p-4 shadow-right-bottom flex flex-col overflow-hidden'>
      <Header />
      <Input />
      <TodoList />
    </main>
  );
}

export default App;
