import { ReactNode, useEffect } from "react"

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  // UseEffect
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <>
      <main>{children}</main>
    </>
  )
}
