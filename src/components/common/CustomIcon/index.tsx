import { IconType } from '@src/models/common'

export const CloseIcon1 = ({ width, height, color }: IconType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.67999L10.32 0L5.99999 4.32L1.67999 0L0 1.67999L4.32 5.99999L0 10.32L1.67999 12L5.99999 7.68L10.32 12L12 10.32L7.68 5.99999L12 1.67999Z"
        fill="#FFFFFF"
      />
    </svg>
  )
}

export const CloseIcon2 = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 32 32" width={width} height={height}>
      <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z" />
    </svg>
  )
}

export const SearchIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={color} viewBox="0 0 24 24" width={width} height={height}>
      <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
    </svg>
  )
}

export const StarIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
      <path
        fill={color}
        stroke="#200E32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
        transform="translate(2.5 3)"
      />
    </svg>
  )
}

export const YouTubeIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <path
        fill={color}
        d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
      />
      <path fill="#FFF" d="M20 31L20 17 32 24z" />
    </svg>
  )
}

export const TelegramIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
      <path
        fill={color}
        d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
      />
      <path
        fill="#b0bec5"
        d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
      />
      <path
        fill="#cfd8dc"
        d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
      />
    </svg>
  )
}

export const FaceBookIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" />
      <path
        fill={color}
        d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
      />
    </svg>
  )
}

export const InstagramIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#fd5" />
        <stop offset=".328" stopColor="#ff543f" />
        <stop offset=".348" stopColor="#fc5245" />
        <stop offset=".504" stopColor="#e64771" />
        <stop offset=".643" stopColor="#d53e91" />
        <stop offset=".761" stopColor="#cc39a4" />
        <stop offset=".841" stopColor="#c837ab" />
      </radialGradient>
      <path
        fill={color}
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
      />
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9" />
        <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
        d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"
      />
      <path
        fill="#fff"
        d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
      />
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
      <path
        fill="#fff"
        d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
      />
    </svg>
  )
}

export const GoogleIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <path
        fill={color}
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  )
}

export const BinIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={width} height={height}>
      <radialGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_a"
        cx="36.833"
        cy="35.917"
        r="26"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#afeeff" />
        <stop offset=".193" stopColor="#bbf1ff" />
        <stop offset=".703" stopColor="#d7f8ff" />
        <stop offset="1" stopColor="#e1faff" />
      </radialGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_a)"
        d="M10,8L10,8c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h0C7.791,0,6,1.791,6,4v0 C6,6.209,7.791,8,10,8z"
      />
      <radialGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_b"
        cx="31.417"
        cy="29.917"
        r="28.77"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#afeeff" />
        <stop offset=".193" stopColor="#bbf1ff" />
        <stop offset=".703" stopColor="#d7f8ff" />
        <stop offset="1" stopColor="#e1faff" />
      </radialGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_b)"
        d="M7.5,64L7.5,64c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5h0 C5.567,57,4,58.567,4,60.5v0C4,62.433,5.567,64,7.5,64z"
      />
      <radialGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_c"
        cx="32.5"
        cy="32"
        r="30.775"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#afeeff" />
        <stop offset=".193" stopColor="#bbf1ff" />
        <stop offset=".703" stopColor="#d7f8ff" />
        <stop offset="1" stopColor="#e1faff" />
      </radialGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_c)"
        d="M62,20.5L62,20.5c0-2.485-2.015-4.5-4.5-4.5H44c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4 h2c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4L22,0c-2.209,0-4,1.791-4,4v0c0,2.209,1.791,4,4,4h2c1.657,0,3,1.343,3,3v0 c0,1.657-1.343,3-3,3H10.5C8.567,14,7,15.567,7,17.5v0c0,1.933,1.567,3.5,3.5,3.5H13c1.657,0,3,1.343,3,3v0c0,1.657-1.343,3-3,3H8 c-2.761,0-5,2.239-5,5v0c0,2.761,2.239,5,5,5h5.5c1.933,0,3.5,1.567,3.5,3.5v0c0,1.933-1.567,3.5-3.5,3.5H9c-2.209,0-4,1.791-4,4v0 c0,2.209,1.791,4,4,4h8.5c1.381,0,2.5,1.119,2.5,2.5v0c0,1.381-1.119,2.5-2.5,2.5h0c-1.933,0-3.5,1.567-3.5,3.5v0 c0,1.933,1.567,3.5,3.5,3.5h30c1.933,0,3.5-1.567,3.5-3.5v0c0-1.933-1.567-3.5-3.5-3.5H47c-1.105,0-2-0.895-2-2v0 c0-1.105,0.895-2,2-2h7c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-5.5c-1.381,0-2.5-1.119-2.5-2.5v0c0-1.381,1.119-2.5,2.5-2.5 H49c2.209,0,4-1.791,4-4v0c0-2.209-1.791-4-4-4h-1.5c-1.933,0-3.5-1.567-3.5-3.5v0c0-1.933,1.567-3.5,3.5-3.5h10 C59.985,25,62,22.985,62,20.5z"
      />
      <radialGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_d"
        cx="35.917"
        cy="35.417"
        r="27.938"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#afeeff" />
        <stop offset=".193" stopColor="#bbf1ff" />
        <stop offset=".703" stopColor="#d7f8ff" />
        <stop offset="1" stopColor="#e1faff" />
      </radialGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_d)"
        d="M59,40L59,40c-2.209,0-4-1.791-4-4v0c0-2.209,1.791-4,4-4h0c2.209,0,4,1.791,4,4v0 C63,38.209,61.209,40,59,40z"
      />
      <g>
        <path
          fill="#717171"
          d="M41.5,14.5c-0.829,0-1.5-0.672-1.5-1.5V8.5C40,7.121,38.654,6,37,6H27c-1.654,0-3,1.121-3,2.5V13 c0,0.828-0.671,1.5-1.5,1.5S21,13.828,21,13V8.5C21,5.468,23.691,3,27,3h10c3.309,0,6,2.468,6,5.5V13 C43,13.828,42.329,14.5,41.5,14.5z"
        />
      </g>
      <linearGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_e"
        x1="32"
        x2="32"
        y1="26.503"
        y2="64.503"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#a4a4a4" />
        <stop offset=".63" stopColor="#7f7f7f" />
        <stop offset="1" stopColor="#6f6f6f" />
        <stop offset="1" stopColor="#6f6f6f" />
      </linearGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_e)"
        d="M43,59H21c-4.418,0-8-3.582-8-8V21h38v30C51,55.418,47.418,59,43,59z"
      />
      <linearGradient
        id="hGOJzj8L5E~Nhy3sq1Ba_f"
        x1="32"
        x2="32"
        y1="3.541"
        y2="31.891"
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset="0" stopColor="#a4a4a4" />
        <stop offset=".63" stopColor="#7f7f7f" />
        <stop offset="1" stopColor="#6f6f6f" />
      </linearGradient>
      <path
        fill="url(#hGOJzj8L5E~Nhy3sq1Ba_f)"
        d="M51,21H13c-1.657,0-3-1.343-3-3v-2c0-3.314,2.686-6,6-6h32c3.314,0,6,2.686,6,6v2 C54,19.657,52.657,21,51,21z"
      />
      <g>
        <linearGradient
          id="hGOJzj8L5E~Nhy3sq1Ba_g"
          x1="32"
          x2="32"
          y1="21"
          y2="49"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor="#d8d8d8" />
          <stop offset=".759" stopColor="#c9c9c9" />
          <stop offset="1" stopColor="#c3c3c3" />
        </linearGradient>
        <path fill="url(#hGOJzj8L5E~Nhy3sq1Ba_g)" d="M30,21h4v26c0,1.105-0.895,2-2,2h0c-1.105,0-2-0.895-2-2V21z" />
        <linearGradient
          id="hGOJzj8L5E~Nhy3sq1Ba_h"
          x1="42"
          x2="42"
          y1="21"
          y2="49"
          gradientUnits="userSpaceOnUse"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor="#d8d8d8" />
          <stop offset=".759" stopColor="#c9c9c9" />
          <stop offset="1" stopColor="#c3c3c3" />
        </linearGradient>
        <path fill="url(#hGOJzj8L5E~Nhy3sq1Ba_h)" d="M40,21h4v26c0,1.105-0.895,2-2,2h0c-1.105,0-2-0.895-2-2V21z" />
        <g>
          <linearGradient
            id="hGOJzj8L5E~Nhy3sq1Ba_i"
            x1="22"
            x2="22"
            y1="21"
            y2="49"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#d8d8d8" />
            <stop offset=".759" stopColor="#c9c9c9" />
            <stop offset="1" stopColor="#c3c3c3" />
          </linearGradient>
          <path fill="url(#hGOJzj8L5E~Nhy3sq1Ba_i)" d="M20,21h4v26c0,1.105-0.895,2-2,2h0c-1.105,0-2-0.895-2-2V21z" />
        </g>
      </g>
    </svg>
  )
}

export const MessageIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={width} height={height}>
      <linearGradient id="IKe0efjh8lUd5BNYkPrwHa" x1="31.5" x2="31.5" y1="9" y2="53" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset="1" stopColor="#e6abff" />
      </linearGradient>
      <path
        fill="url(#IKe0efjh8lUd5BNYkPrwHa)"
        d="M25,41c0-6.627,6.716-12,15-12c6.616,0,12.219,3.43,14.213,8.186 C55.362,34.812,56,32.219,56,29.5C56,18.178,45.031,9,31.5,9S7,18.178,7,29.5c0,7.407,4.695,13.895,11.731,17.497 C18.341,48.724,17.382,51.213,15,53c4.124-0.687,7.303-2.319,9.212-3.922c1.856,0.483,3.809,0.776,5.825,0.876 C26.953,47.756,25,44.564,25,41z"
      />
      <linearGradient id="IKe0efjh8lUd5BNYkPrwHb" x1="31.5" x2="31.5" y1="8" y2="57" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1a6dff" />
        <stop offset="1" stopColor="#c822ff" />
      </linearGradient>
      <path
        fill="url(#IKe0efjh8lUd5BNYkPrwHb)"
        d="M57,29.5C57,17.645,45.561,8,31.5,8S6,17.645,6,29.5c0,7.341,4.307,14.021,11.563,18.01 c-0.449,1.5-1.352,3.331-3.163,4.69c-0.369,0.276-0.501,0.77-0.319,1.193C14.24,53.766,14.604,54,15,54 c0.054,0,0.109-0.005,0.164-0.014c3.564-0.594,6.915-1.976,9.289-3.817c1.684,0.405,3.445,0.657,5.245,0.762 C32.484,52.842,36.077,54,40,54c0.972,0,1.97-0.079,2.975-0.234c0.968,1.083,2.96,2.57,6.861,3.221C49.891,56.995,49.945,57,50,57 c0.37,0,0.716-0.206,0.889-0.542c0.199-0.387,0.126-0.857-0.182-1.165c-0.876-0.876-1.604-2.042-2.094-3.342 C53.192,49.573,56,45.445,56,41c0-1.32-0.247-2.593-0.699-3.795C56.424,34.741,57,32.152,57,29.5z M46.976,50.525 c-0.453,0.205-0.686,0.712-0.547,1.188c0.269,0.926,0.642,1.814,1.098,2.63c-1.968-0.712-2.904-1.649-3.327-2.242 c-0.189-0.267-0.495-0.42-0.814-0.42c-0.061,0-0.121,0.006-0.182,0.017C42.118,51.898,41.041,52,40,52 c-3.609,0-6.892-1.088-9.377-2.856c-0.002-0.002-0.004-0.004-0.006-0.006C27.683,47.048,26,44.082,26,41c0-6.065,6.28-11,14-11 c0.439,0,0.871,0.021,1.3,0.052c0.135,0.01,0.269,0.025,0.403,0.038c0.298,0.029,0.593,0.063,0.885,0.106 c0.143,0.021,0.286,0.043,0.428,0.068c0.304,0.053,0.604,0.114,0.9,0.182c0.107,0.025,0.217,0.046,0.323,0.072 c0.405,0.101,0.803,0.214,1.19,0.343c0.029,0.01,0.057,0.021,0.086,0.031c0.359,0.121,0.71,0.255,1.053,0.399 c0.09,0.038,0.177,0.078,0.266,0.117c0.287,0.127,0.567,0.26,0.841,0.402c0.085,0.044,0.171,0.088,0.255,0.134 c0.294,0.16,0.581,0.328,0.858,0.505c0.048,0.03,0.098,0.059,0.145,0.09c0.331,0.216,0.649,0.442,0.953,0.681 c0.019,0.015,0.036,0.031,0.055,0.046c0.264,0.209,0.514,0.428,0.756,0.653c0.102,0.095,0.198,0.194,0.296,0.292 c0.146,0.146,0.287,0.294,0.424,0.445c0.12,0.134,0.238,0.269,0.351,0.408c0.091,0.111,0.176,0.225,0.262,0.339 c0.131,0.175,0.263,0.349,0.383,0.531c0.018,0.028,0.034,0.057,0.052,0.084c0.32,0.496,0.599,1.014,0.826,1.554 c0.004,0.01,0.012,0.018,0.017,0.028C53.752,38.672,54,39.813,54,41C54,44.907,51.309,48.557,46.976,50.525z M54.097,34.855 c-0.005-0.008-0.012-0.016-0.017-0.024c-0.023-0.034-0.048-0.066-0.071-0.1c-0.212-0.314-0.443-0.618-0.684-0.914 c-0.042-0.051-0.084-0.102-0.127-0.153c-0.559-0.665-1.189-1.282-1.882-1.846c-0.006-0.005-0.013-0.01-0.019-0.015 c-0.72-0.584-1.505-1.111-2.346-1.573c-0.013-0.007-0.026-0.013-0.039-0.02c-0.386-0.211-0.785-0.407-1.193-0.589 c-0.055-0.025-0.109-0.05-0.164-0.074c-0.423-0.184-0.855-0.356-1.298-0.509c-0.049-0.017-0.101-0.031-0.15-0.048 c-0.381-0.128-0.769-0.243-1.164-0.347c-0.115-0.03-0.229-0.061-0.345-0.089c-0.443-0.108-0.891-0.205-1.347-0.282 c-0.051-0.009-0.104-0.014-0.155-0.022c-0.416-0.067-0.838-0.117-1.263-0.157c-0.127-0.012-0.255-0.023-0.383-0.032 C40.97,28.024,40.488,28,40,28c-8.822,0-16,5.832-16,13c0,0.4,0.029,0.797,0.074,1.193c0.016,0.141,0.041,0.28,0.062,0.42 c0.038,0.248,0.083,0.494,0.139,0.739c0.037,0.165,0.077,0.329,0.122,0.492c0.061,0.219,0.132,0.435,0.206,0.651 c0.056,0.163,0.107,0.328,0.171,0.489c0.118,0.296,0.252,0.588,0.396,0.877c0.097,0.195,0.205,0.384,0.313,0.574 c0.112,0.198,0.225,0.395,0.349,0.588c0.103,0.159,0.214,0.314,0.325,0.469c0.128,0.179,0.259,0.356,0.397,0.53 c0.118,0.148,0.237,0.294,0.362,0.439c0.053,0.062,0.1,0.127,0.155,0.188c-0.89-0.138-1.761-0.317-2.608-0.538 c-0.313-0.08-0.647-0.007-0.895,0.202c-0.762,0.639-2.593,1.972-5.559,2.932c0.934-1.401,1.431-2.858,1.694-4.027 c0.101-0.445-0.113-0.901-0.52-1.109C12.182,42.521,8,36.312,8,29.5C8,18.748,18.542,10,31.5,10S55,18.748,55,29.5 C55,31.324,54.697,33.118,54.097,34.855z"
      />
      <linearGradient id="IKe0efjh8lUd5BNYkPrwHc" x1="33" x2="33" y1="39" y2="43" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset="1" stopColor="#e6abff" />
      </linearGradient>
      <circle cx="33" cy="41" r="2" fill="url(#IKe0efjh8lUd5BNYkPrwHc)" />
      <linearGradient id="IKe0efjh8lUd5BNYkPrwHd" x1="40" x2="40" y1="39" y2="43" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset="1" stopColor="#e6abff" />
      </linearGradient>
      <circle cx="40" cy="41" r="2" fill="url(#IKe0efjh8lUd5BNYkPrwHd)" />
      <linearGradient id="IKe0efjh8lUd5BNYkPrwHe" x1="47" x2="47" y1="39" y2="43" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#6dc7ff" />
        <stop offset="1" stopColor="#e6abff" />
      </linearGradient>
      <circle cx="47" cy="41" r="2" fill="url(#IKe0efjh8lUd5BNYkPrwHe)" />
    </svg>
  )
}

export const EmojiIcon = ({ width, height, color }: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width={width}
      height={height}
      viewBox="0 0 50.000000 50.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)" fill={color} stroke="none">
        <path d="M155 456 c-60 -28 -87 -56 -114 -116 -36 -79 -19 -183 42 -249 33 -36 115 -71 167 -71 52 0 134 35 167 71 34 37 63 110 63 159 0 52 -35 134 -71 167 -37 34 -110 63 -159 63 -27 0 -65 -10 -95 -24z m40 -166 c0 -18 -6 -26 -23 -28 -13 -2 -25 3 -28 12 -10 26 4 48 28 44 17 -2 23 -10 23 -28z m160 0 c0 -18 -6 -26 -23 -28 -24 -4 -38 18 -28 44 3 9 15 14 28 12 17 -2 23 -10 23 -28z m-205 -105 c51 -55 135 -56 196 -3 38 33 59 31 28 -3 -27 -30 -88 -59 -124 -59 -47 0 -140 55 -140 82 0 15 16 8 40 -17z" />
      </g>
    </svg>
  )
}

export const SettingIcon = ({ width, height, color }: IconType) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
      <linearGradient
        id="L4rKfs~Qrm~k0Pk8MRsoza"
        x1="32.012"
        x2="15.881"
        y1="32.012"
        y2="15.881"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff" />
        <stop offset=".242" stopColor="#f2f2f2" />
        <stop offset="1" stopColor="#ccc" />
      </linearGradient>
      <circle cx="24" cy="24" r="11.5" fill="url(#L4rKfs~Qrm~k0Pk8MRsoza)" />
      <linearGradient
        id="L4rKfs~Qrm~k0Pk8MRsozb"
        x1="17.45"
        x2="28.94"
        y1="17.45"
        y2="28.94"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0d61a9" />
        <stop offset=".363" stopColor="#0e5fa4" />
        <stop offset=".78" stopColor="#135796" />
        <stop offset="1" stopColor="#16528c" />
      </linearGradient>
      <circle cx="24" cy="24" r="7" fill="url(#L4rKfs~Qrm~k0Pk8MRsozb)" />
      <linearGradient
        id="L4rKfs~Qrm~k0Pk8MRsozc"
        x1="5.326"
        x2="38.082"
        y1="5.344"
        y2="38.099"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#889097" />
        <stop offset=".331" stopColor="#848c94" />
        <stop offset=".669" stopColor="#78828b" />
        <stop offset="1" stopColor="#64717c" />
      </linearGradient>
      <path
        fill="url(#L4rKfs~Qrm~k0Pk8MRsozc)"
        d="M43.407,19.243c-2.389-0.029-4.702-1.274-5.983-3.493c-1.233-2.136-1.208-4.649-0.162-6.693 c-2.125-1.887-4.642-3.339-7.43-4.188C28.577,6.756,26.435,8,24,8s-4.577-1.244-5.831-3.131c-2.788,0.849-5.305,2.301-7.43,4.188 c1.046,2.044,1.071,4.557-0.162,6.693c-1.281,2.219-3.594,3.464-5.983,3.493C4.22,20.77,4,22.358,4,24 c0,1.284,0.133,2.535,0.364,3.752c2.469-0.051,4.891,1.208,6.213,3.498c1.368,2.37,1.187,5.204-0.22,7.345 c2.082,1.947,4.573,3.456,7.34,4.375C18.827,40.624,21.221,39,24,39s5.173,1.624,6.303,3.971c2.767-0.919,5.258-2.428,7.34-4.375 c-1.407-2.141-1.588-4.975-0.22-7.345c1.322-2.29,3.743-3.549,6.213-3.498C43.867,26.535,44,25.284,44,24 C44,22.358,43.78,20.77,43.407,19.243z M24,34.5c-5.799,0-10.5-4.701-10.5-10.5c0-5.799,4.701-10.5,10.5-10.5S34.5,18.201,34.5,24 C34.5,29.799,29.799,34.5,24,34.5z"
      />
    </svg>
  )
}

export const DropdownArrow = ({ width, height, color }: IconType) => {
  return (
    <svg height={height} viewBox="0 0 24 24" width={width} xmlns="http://www.w3.org/2000/svg">
      <g id="_16" data-name="16">
        <path d="m12 16a1 1 0 0 1 -.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1 -.7.29z" />
      </g>
    </svg>
  )
}
