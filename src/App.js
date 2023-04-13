import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Home from './Components/Home/Home';
import LoadChart from './Components/LoadChart/LoadChart';
import Quiz from './Components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/chart',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <LoadChart></LoadChart>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
