import React from 'react'

const main = (
  <div className="container mx-auto">
    <div>
      <div>GET IN TOUCH</div>
      <div>
        We are a London based digital agency with a home office in Crystal Palace, London. We have
        shared offices across London; get in touch to find out the closest office to you.{' '}
      </div>
    </div>
    <div>
      <div>EMAIL</div>
      <div>PHONE</div>
    </div>
    <div>
      <div>NAVIGATION</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Partnerships</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  </div>
)

const socialLinks = [
  { label: 'Facebook', iconName: '', url: '' },
  { label: 'Twitter', iconName: '', url: '' },
  { label: 'Instagram', iconName: '', url: '' },
  { label: 'LinkedIn', iconName: '', url: '' },
]

const social = (
  <div className="flex container mx-auto justify-center items-center h-24">
    {socialLinks.map(socialLink => {
      const { label, iconName, url } = socialLink
      return (
        <div className="p-8" key={label}>
          {label}
        </div>
      )
    })}
  </div>
)

const base = (
  <div className="flex justify-between text-xs pt-2 text-grey-light flex-col md:flex-row">
    <div>BIT MORE MEDIA LIMITED. Registered in England &amp; Wales, no: 09673233</div>
    <div className="pt-2 md:pt-0">&copy; Copyright Bit More Media 2018.</div>
  </div>
)

const Footer = () => (
  <div className="bg-grey-darkest text-grey-lightest text-sm p-2">
    {main}
    {social}
    {base}
  </div>
)

// const Header = () => (
//   <div className="bg-grey-darkest">
//     <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
//       <p className="text-white">
//         Created by{' '}
//         <a href="https://www.bitmoremedia.com" className="font-bold no-underline text-white">
//           BitMoreMedia
//         </a>
//       </p>
//       <p className="text-white">
//         Hosted on{' '}
//         <a
//           href="https://github.com/bitmoremedia/www-bitmoremedia"
//           className="font-bold no-underline text-white"
//         >
//           GitHub
//         </a>
//       </p>
//     </div>
//   </div>
// )

export default Footer
