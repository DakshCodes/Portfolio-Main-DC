import Link from 'next/link'
import React from 'react'
import logo from '../../public/images/profile/dsc.svg';
import { motion } from 'framer-motion'
const MotionLink = motion(Link);
const Logo = () => {
  return (
    <>
      <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className=' h-[100px] md:h-[10px] md:w-[100px] w-[100px] text-light flex justify-center
       items-center rounded-full text-2xl font-bold '

          // whileHover={{
          //   backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
          // }}
          // transition={{ duration: 1, repeat: Infinity }}
        >
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="-2 2 75.76 50.58">
            <defs>
              <style>{".cls-1{fill:#121212}"}</style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  d="M28.39 35.08v.44l-.39.23-.39-.23v-.44l.39-.23.39.23z"
                  className="cls-1"
                />
                <path
                  d="M28.39 34.63v.45l-.39-.23.39-.22zM28.39 25.34v9.29l-.39.22-.39-.22v-9.29l.39-.22.39.22z"
                  className="cls-1"
                />
                <path d="M28.39 24.89v.45l-.39-.22.39-.23z" className="cls-1" />
                <path
                  d="M28.39 24.45v.44l-.39.23-.39-.22v-.45l.39-.23.39.23zM28.39 24v.45l-.39-.23.39-.22z"
                  className="cls-1"
                />
                <path
                  d="M28.39 14.71V24l-.39.22-.39-.22v-9.29l.39-.22.39.22zM28.39 14.27v.44l-.39-.22.39-.22z"
                  className="cls-1"
                />
                <path
                  d="M28.39 13.82v.45l-.39.22-.39-.22v-.45l.39-.22.39.22zM27.61 35.52l.39.23-.39.22v-.45z"
                  className="cls-1"
                />
                <path
                  d="m27.61 13.38.39.22-.39.22v-.44zM28 14.49l-.39.22v-.44l.39.22zM28 24.22l-.39.23V24l.39.22zM28 25.12l-.39.22v-.44l.39.22zM28 34.85l-.39.23v-.45l.39.22zM27.61 35.52v.45l-8.04 4.64-.39-.21v-.46l8.04-4.64.39.22zM27.61 35.08v.44l-.39-.22.39-.22z"
                  className="cls-1"
                />
                <path
                  d="M27.61 34.63v.45l-.39.22-8.04-4.65v-.44l.39-.23 8.04 4.65zM27.61 24.9v.44l-8.04 4.64-.39-.21v-.46l8.04-4.64.39.23z"
                  className="cls-1"
                />
                <path d="M27.61 24.45v.45l-.39-.23.39-.22z" className="cls-1" />
                <path
                  d="M27.61 24v.45l-.39.22-8.04-4.63v-.46l.39-.22L27.61 24zM27.61 14.27v.44l-8.04 4.65-.39-.22v-.45l8.04-4.64.39.22zM27.61 13.82v.45l-.39-.22.39-.23z"
                  className="cls-1"
                />
                <path
                  d="M27.61 13.38v.44l-.39.23-8.04-4.64v-.46l.39-.22 8.04 4.65zM19.57 19.36l-.39.22v-.44l.39.22z"
                  className="cls-1"
                />
                <path
                  d="m19.57 8.73-.39.22v-.44l.39.22zM19.57 29.98l-.39.23v-.44l.39.21zM19.57 40.61l-.39.23v-.44l.39.21zM19.18 40.4v.44l-.39.22-.38-.22v-.45l.38-.23.39.24z"
                  className="cls-1"
                />
                <path d="M19.18 39.94v.46l-.39-.24.39-.22z" className="cls-1" />
                <path
                  d="M19.18 30.65v9.29l-.39.22-.38-.21v-9.29l.38-.23.39.22z"
                  className="cls-1"
                />
                <path
                  d="M19.18 30.21v.44l-.39-.22.39-.22zM19.18 29.77v.44l-.39.22-.38-.22v-.45l.38-.22.39.23zM19.18 29.31v.46l-.39-.23.39-.23z"
                  className="cls-1"
                />
                <path
                  d="M19.18 20.04v9.27l-.39.23-.38-.22v-9.29l.38-.23.39.24z"
                  className="cls-1"
                />
                <path d="M19.18 19.58v.46l-.39-.24.39-.22z" className="cls-1" />
                <path
                  d="M19.18 19.14v.44l-.39.22-.38-.21v-.45l.38-.23.39.23z"
                  className="cls-1"
                />
                <path
                  d="M19.18 18.69v.45l-.39-.23.39-.22zM19.18 9.41v9.28l-.39.22-.38-.22V9.4l.38-.22.39.23z"
                  className="cls-1"
                />
                <path d="M19.18 8.95v.46l-.39-.23.39-.23z" className="cls-1" />
                <path
                  d="M19.18 8.51v.44l-.39.23-.38-.22v-.45l.38-.22.39.22zM18.41 30.21l.38.22-.38.23v-.45zM18.41 40.84l.38.22-.38.23v-.45z"
                  className="cls-1"
                />
                <path
                  d="m18.79 8.29-.38.22v-.45l.38.23zM18.79 18.91l-.38.23v-.45l.38.22zM18.79 40.16l-.38.23v-.44l.38.21zM18.79 29.54l-.38.22v-.44l.38.22zM18.79 19.8l-.38.23v-.44l.38.21zM18.79 9.18l-.38.22v-.44l.38.22zM18.41 40.84v.45l-8.04 4.64-.39-.23v-.45l8.04-4.64.39.23z"
                  className="cls-1"
                />
                <path
                  d="M18.41 40.39v.45l-.39-.23.39-.22zM18.41 39.95v.44l-.39.22-8.04-4.64v-.45l.39-.22 8.04 4.65zM18.41 30.21v.45l-8.04 4.64-.39-.22v-.45l8.04-4.65.39.23z"
                  className="cls-1"
                />
                <path
                  d="M18.41 29.76v.45l-.39-.23.39-.22zM18.41 19.14v.45l-.39-.23.39-.22z"
                  className="cls-1"
                />
                <path
                  d="M18.41 18.69v.45l-.39.22-8.04-4.64v-.45l.39-.23 8.04 4.65zM18.41 8.96v.44l-8.04 4.64-.39-.22v-.44l8.04-4.65.39.23z"
                  className="cls-1"
                />
                <path d="M18.41 8.51v.45l-.39-.23.39-.22z" className="cls-1" />
                <path
                  d="M18.41 8.06v.45l-.39.22-8.04-4.64v-.44l.39-.23 8.04 4.64zM9.98 45.7l.39.23-.39.22v-.45zM9.98 3.19l.39.23-.39.23v-.46zM10.37 14.04l-.39.23v-.45l.39.22zM10.37 35.3l-.39.22v-.44l.39.22zM9.98 45.7v.45l-.39.23-.39-.23v-.45l.39-.22.39.22z"
                  className="cls-1"
                />
                <path
                  d="M9.98 45.25v.45l-.39-.22.39-.23zM9.98 35.97v9.28l-.39.23-.39-.23v-9.28l.39-.22.39.22z"
                  className="cls-1"
                />
                <path
                  d="M9.98 35.52v.45l-.39-.22.39-.23zM9.98 35.08v.44l-.39.23-.39-.23v-.44l.38-.23.4.23z"
                  className="cls-1"
                />
                <path
                  d="M9.98 34.63v.45l-.4-.23.4-.22zM9.98 14.27v.45l-.4-.23.4-.22z"
                  className="cls-1"
                />
                <path
                  d="M9.98 13.82v.45l-.4.22-.38-.22v-.45l.39-.22.39.22z"
                  className="cls-1"
                />
                <path d="M9.98 13.38v.44l-.39-.22.39-.22z" className="cls-1" />
                <path
                  d="M9.98 4.09v9.29l-.39.22-.39-.22V4.09l.39-.22.39.22z"
                  className="cls-1"
                />
                <path d="M9.98 3.65v.44l-.39-.22.39-.22z" className="cls-1" />
                <path
                  d="M9.98 3.19v.46l-.39.22-.39-.22v-.46l.39-.22.39.22zM9.2 35.52l.39.23-.39.22v-.45zM9.2 45.25l.39.23-.39.22v-.45z"
                  className="cls-1"
                />
                <path
                  d="m9.59 3.87-.39.22v-.44l.39.22zM9.59 13.6l-.39.22v-.44l.39.22zM9.58 34.85l-.38.23v-.45l.38.22zM9.58 14.49l-.38.22v-.44l.38.22zM9.2 45.7v.45l-.38-.22.38-.23zM9.2 45.25v.45l-.38.23-8.04-4.64v-.45l.38-.23 8.04 4.64z"
                  className="cls-1"
                />
                <path
                  d="M9.2 35.52v.45l-8.04 4.64-.38-.22v-.45l8.04-4.64.38.22zM9.2 35.08v.44l-.38-.22.38-.22z"
                  className="cls-1"
                />
                <path
                  d="M9.2 34.63v.45l-.38.22-8.04-4.64v-.45l.37-.23 8.05 4.65zM9.2 14.27v.44l-8.05 4.65-.37-.22v-.45l8.04-4.64.38.22zM9.2 13.82v.45l-.38-.22.38-.23z"
                  className="cls-1"
                />
                <path
                  d="M9.2 13.38v.44l-.38.23L.78 9.41v-.45l.38-.23 8.04 4.65zM9.2 3.65v.44L1.16 8.73l-.38-.22v-.45l8.04-4.64.38.23zM9.2 3.19v.46l-.38-.23.38-.23z"
                  className="cls-1"
                />
                <path
                  d="m.78 8.51.38.22-.38.23v-.45zM.78 40.39l.38.22-.38.23v-.45zM1.15 29.98l-.37.23v-.44l.37.21zM1.15 19.36l-.37.22v-.44l.37.22zM.78 40.84v.45l-.39-.23.39-.22zM.78 40.39v.45l-.39.22-.39-.22v-.45l.39-.23.39.23z"
                  className="cls-1"
                />
                <path
                  d="M.78 39.94v.45l-.39-.23.39-.22zM.78 30.66v9.28l-.39.22-.39-.22v-9.28l.39-.23.39.23z"
                  className="cls-1"
                />
                <path d="M.78 30.21v.45l-.39-.23.39-.22z" className="cls-1" />
                <path
                  d="M.78 29.77v.44l-.39.22-.39-.22v-.44l.39-.23.39.23zM.78 19.14v.44l-.39.22-.39-.22v-.44l.39-.23.39.23z"
                  className="cls-1"
                />
                <path
                  d="M.78 18.69v.45l-.39-.23.39-.22zM.78 9.41v9.28l-.39.22-.39-.22V9.41l.39-.23.39.23z"
                  className="cls-1"
                />
                <path d="M.78 8.96v.45l-.39-.23.39-.22z" className="cls-1" />
                <path
                  d="M.78 8.51v.45l-.39.22L0 8.96v-.45l.39-.22.39.22zM.78 8.06v.45l-.39-.22.39-.23zM0 30.21l.39.22-.39.23v-.45z"
                  className="cls-1"
                />
                <path
                  d="M.39 9.18 0 9.41v-.45l.39.22zM.39 18.91l-.39.23v-.45l.39.22zM.39 40.16l-.39.23v-.45l.39.22zM59.2 38.24v.58l-.5.29-.5-.29v-.57l.51-.3.49.29z"
                  className="cls-1"
                />
                <path d="M59.2 37.67v.57l-.49-.29.49-.28z" className="cls-1" />
                <path
                  d="M59.2 25.68v11.99l-.49.28-.51-.29V25.67l.5-.28.5.29z"
                  className="cls-1"
                />
                <path
                  d="M59.2 25.1v.58l-.5-.29.5-.29zM59.2 24.52v.58l-.5.29-.5-.29v-.57l.51-.3.49.29zM59.2 10.81v.58l-.49.28-.51-.29v-.57l.5-.29.5.29z"
                  className="cls-1"
                />
                <path
                  d="m58.71 11.67-.51.3v-.59l.51.29zM58.71 24.23l-.51.3v-.59l.51.29zM58.71 37.95l-.51.3v-.59l.51.29zM58.7 10.52l-.5.29v-.58l.5.29zM58.7 25.39l-.5.28v-.57l.5.29zM58.7 39.11l-.5.28v-.57l.5.29zM58.2 38.82v.57l-10.38 6-.5-.29v-.57l10.38-6 .5.29z"
                  className="cls-1"
                />
                <path d="M58.2 38.25v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M58.2 37.66v.59l-.5.28-10.38-5.99v-.58l.5-.29 10.38 5.99zM58.2 25.1v.57l-10.38 6-.5-.29v-.57l10.38-6 .5.29z"
                  className="cls-1"
                />
                <path d="M58.2 24.53v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M58.2 23.94v.59l-.5.28-10.38-5.99v-.57l.51-.3 10.37 5.99zM58.2 11.38v.59l-10.37 5.98-.51-.29v-.57l10.38-6 .5.29z"
                  className="cls-1"
                />
                <path
                  d="M58.2 10.81v.57l-.5-.29.5-.28zM58.2 10.23v.58l-.5.28L47.32 5.1v-.57l.5-.29 10.38 5.99zM47.83 17.95l-.51.3v-.59l.51.29z"
                  className="cls-1"
                />
                <path
                  d="m47.82 4.24-.5.29v-.58l.5.29zM47.82 31.67l-.5.29v-.58l.5.29zM47.82 45.39l-.5.29v-.58l.5.29zM47.32 45.1v.58l-.5.29-.5-.29v-.58l.5-.29.5.29z"
                  className="cls-1"
                />
                <path d="M47.32 44.53v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M47.32 32.54v11.99l-.5.28-.5-.29V32.53l.5-.28.5.29z"
                  className="cls-1"
                />
                <path
                  d="M47.32 31.96v.58l-.5-.29.5-.29zM47.32 31.38v.58l-.5.29-.5-.29v-.58l.5-.29.5.29zM47.32 30.81v.57l-.5-.29.5-.28z"
                  className="cls-1"
                />
                <path
                  d="M47.32 18.82v11.99l-.5.28-.5-.29V18.82l.5-.29.5.29z"
                  className="cls-1"
                />
                <path d="M47.32 18.25v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M47.32 17.66v.59l-.5.28-.5-.29v-.57l.5-.3.5.29z"
                  className="cls-1"
                />
                <path d="M47.32 17.09v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M47.32 5.1v11.99l-.5.28-.5-.29V5.1l.5-.29.5.29z"
                  className="cls-1"
                />
                <path d="M47.32 4.53v.57l-.5-.29.5-.28z" className="cls-1" />
                <path
                  d="M47.32 3.95v.58l-.5.28-.5-.29v-.57l.5-.29.5.29zM46.82 44.81l-.5.29v-.58l.5.29zM46.82 31.09l-.5.29v-.58l.5.29zM46.82 18.53l-.5.29v-.58l.5.29zM46.82 17.37l-.5.3v-.59l.5.29z"
                  className="cls-1"
                />
                <path
                  d="m46.82 4.81-.5.29v-.58l.5.29zM46.82 32.25l-.5.28v-.57l.5.29zM46.32 45.1v.58l-.5-.29.5-.29z"
                  className="cls-1"
                />
                <path
                  d="M46.32 44.52v.58l-.5.29-10.38-5.99v-.58l.5-.29 10.38 5.99zM46.32 31.96v.57l-10.38 6-.5-.29v-.57l10.38-6 .5.29zM46.32 31.38v.58l-.5-.29.5-.29z"
                  className="cls-1"
                />
                <path
                  d="M46.32 30.8v.58l-.5.29-10.38-5.99v-.57l.51-.3 10.37 5.99zM46.32 18.24v.58l-10.37 5.99-.51-.29v-.57l10.38-6 .5.29z"
                  className="cls-1"
                />
                <path
                  d="M46.32 17.67v.57l-.5-.29.5-.28zM46.32 17.08v.59l-.5.28-10.38-5.99v-.57l.51-.3 10.37 5.99zM46.32 4.52v.58l-10.37 5.99-.51-.29v-.57l10.38-6 .5.29z"
                  className="cls-1"
                />
                <path
                  d="M46.32 3.95v.57l-.5-.29.5-.28zM35.95 11.09l-.51.3v-.59l.51.29zM35.95 24.81l-.51.3v-.59l.51.29zM35.94 38.53l-.5.29v-.58l.5.29zM35.44 38.82v.58l-.51-.29.51-.29z"
                  className="cls-1"
                />
                <path
                  d="M35.44 38.24v.58l-.51.29-.49-.29v-.58l.5-.29.5.29z"
                  className="cls-1"
                />
                <path
                  d="M35.44 37.67v.57l-.5-.29.5-.28zM35.44 25.11v.57l-.5-.29.5-.28z"
                  className="cls-1"
                />
                <path
                  d="M35.44 24.52v.59l-.5.28-.5-.29v-.58l.5-.29.5.29zM35.44 23.95v.57l-.5-.29.5-.28z"
                  className="cls-1"
                />
                <path
                  d="M35.44 11.96v11.99l-.5.28-.5-.29V11.96l.5-.29.5.29z"
                  className="cls-1"
                />
                <path
                  d="M35.44 11.39v.57l-.5-.29.5-.28zM35.44 10.8v.59l-.5.28-.5-.29v-.58l.5-.29.5.29z"
                  className="cls-1"
                />
                <path
                  d="M35.44 10.23v.57l-.5-.29.5-.28zM34.94 24.23l-.5.29v-.58l.5.29zM34.94 11.67l-.5.29v-.58l.5.29z"
                  className="cls-1"
                />
                <path
                  d="M67.76 0v.57l-.5-.29.5-.28z"
                  style={{
                    fill: "#ffff",
                  }}
                />
              </g>
            </g>
          </svg>
        </MotionLink>
      </div>
    </>
  )
}

export default Logo
