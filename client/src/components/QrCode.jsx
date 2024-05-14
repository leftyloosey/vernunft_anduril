import { QRCode } from 'react-qrcode-logo'
import image from '../assets/images/88blendz_copy.jpeg'

const QrCode = ({ listAddress }) => {
  return (
    <>
      <QRCode
        value={listAddress}
        logoImage={image}
        logoHeight={75}
        logoWidth={75}
      />
      ,
    </>
  )
}

export default QrCode
