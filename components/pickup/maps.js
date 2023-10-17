import React from 'react'

const maps = () => {
  return (
    <div className='w-full mt-12 flex justify-center'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32660010.756335795!2d95.84273815131432!3d-2.2222474753839583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1697458081904!5m2!1sid!2sid"
        width={900}
        height={500}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default maps