import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <button
        onClick={() =>
          router.replace(`?foo=${Math.random()}`, undefined, { shallow: true })
        }
      >
        Random
      </button>
    </>
  )
}
