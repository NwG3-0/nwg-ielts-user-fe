import { IconType } from '@src/models/common'

export const CloseIcon = ({ width, height, color }: IconType) => {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 1.67999L10.32 0L5.99999 4.32L1.67999 0L0 1.67999L4.32 5.99999L0 10.32L1.67999 12L5.99999 7.68L10.32 12L12 10.32L7.68 5.99999L12 1.67999Z"
        fill="#FFFFFF"
      />
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
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
        <stop offset="0" stop-color="#fd5" />
        <stop offset=".328" stop-color="#ff543f" />
        <stop offset=".348" stop-color="#fc5245" />
        <stop offset=".504" stop-color="#e64771" />
        <stop offset=".643" stop-color="#d53e91" />
        <stop offset=".761" stop-color="#cc39a4" />
        <stop offset=".841" stop-color="#c837ab" />
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
        <stop offset="0" stop-color="#4168c9" />
        <stop offset=".999" stop-color="#4168c9" stop-opacity="0" />
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
        <stop offset="0" stop-color="#afeeff" />
        <stop offset=".193" stop-color="#bbf1ff" />
        <stop offset=".703" stop-color="#d7f8ff" />
        <stop offset="1" stop-color="#e1faff" />
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
        <stop offset="0" stop-color="#afeeff" />
        <stop offset=".193" stop-color="#bbf1ff" />
        <stop offset=".703" stop-color="#d7f8ff" />
        <stop offset="1" stop-color="#e1faff" />
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
        <stop offset="0" stop-color="#afeeff" />
        <stop offset=".193" stop-color="#bbf1ff" />
        <stop offset=".703" stop-color="#d7f8ff" />
        <stop offset="1" stop-color="#e1faff" />
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
        <stop offset="0" stop-color="#afeeff" />
        <stop offset=".193" stop-color="#bbf1ff" />
        <stop offset=".703" stop-color="#d7f8ff" />
        <stop offset="1" stop-color="#e1faff" />
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
        <stop offset="0" stop-color="#a4a4a4" />
        <stop offset=".63" stop-color="#7f7f7f" />
        <stop offset="1" stop-color="#6f6f6f" />
        <stop offset="1" stop-color="#6f6f6f" />
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
        <stop offset="0" stop-color="#a4a4a4" />
        <stop offset=".63" stop-color="#7f7f7f" />
        <stop offset="1" stop-color="#6f6f6f" />
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
          <stop offset="0" stop-color="#d8d8d8" />
          <stop offset=".759" stop-color="#c9c9c9" />
          <stop offset="1" stop-color="#c3c3c3" />
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
          <stop offset="0" stop-color="#d8d8d8" />
          <stop offset=".759" stop-color="#c9c9c9" />
          <stop offset="1" stop-color="#c3c3c3" />
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
            <stop offset="0" stop-color="#d8d8d8" />
            <stop offset=".759" stop-color="#c9c9c9" />
            <stop offset="1" stop-color="#c3c3c3" />
          </linearGradient>
          <path fill="url(#hGOJzj8L5E~Nhy3sq1Ba_i)" d="M20,21h4v26c0,1.105-0.895,2-2,2h0c-1.105,0-2-0.895-2-2V21z" />
        </g>
      </g>
    </svg>
  )
}
