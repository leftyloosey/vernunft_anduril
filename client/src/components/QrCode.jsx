import { QRCode } from 'react-qrcode-logo'
import image from '../assets/images/88blendz_copy.jpeg'

const QrCode = ({ listAddress }) => {
  return (
    <>
      {/* <img src={qrcode} alt='' /> */}
      <QRCode
        value={listAddress}
        logoImage={image}
        logoHeight={45}
        logoWidth={45}
        logoPaddingStyle={'circle'}
      />
      ,
    </>
  )
}

export default QrCode
