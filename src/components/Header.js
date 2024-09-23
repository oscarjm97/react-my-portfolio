import React, { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Box, HStack } from "@chakra-ui/react"

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: terceroonceoscar@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/oscarjm97",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/oscar-jimenez-jimenez-743696150",
  },
]

const Header = () => {
  const [isVisible, setIsVisible] = useState(true) // State to track header visibility
  const prevScrollY = useRef(0) // To keep track of the previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < prevScrollY.current) {
        setIsVisible(true)
      } else if (currentScrollY > prevScrollY.current) {
        setIsVisible(false)
      }

      prevScrollY.current = currentScrollY // Update previous scroll position
    }

    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      transform={isVisible ? 'translateY(0)' : 'translateY(-200px)'}
      backgroundColor="#18181b"
      zIndex='1'
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  )
}
export default Header
