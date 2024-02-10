import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Link } from 'react-router-dom'
import CPRContainer from "./CPRContainer"

export default function HomePage() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="text-center m-4">
          <img src="/mainicon.svg" alt="CPR icon" className="mx-auto" />
          <h1 className="text-gray-800 text-3xl">CPRnow</h1>
        </div>
        <Link to="assessment" className="hover:text-blue-200 transition duration-150 ease-in-out">
          <Button className="my-2">
            Do CPR now
          </Button>
        </Link>
        <Button className="my-2">
          CPR Training
        </Button>
      </div>
    </>
  )
}