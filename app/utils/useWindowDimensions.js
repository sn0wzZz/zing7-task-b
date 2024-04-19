import { useState, useEffect } from 'react'

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize() // Call once to get initial dimensions

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array means this effect runs only once after the initial render

  const { width, height } = windowDimensions

  return { width, height }
}

export default useWindowDimensions
