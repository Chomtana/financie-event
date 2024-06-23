import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'aos/dist/aos.css';
import "/public/assets/dist/app.css"
import "/public/assets/font/font-awesome.css"
import "/public/assets/dist/swiper-bundle.min.css"
import { Web3ModalProvider } from "@/components/providers/Web3ModalProvider";
import { CollectionProvider } from "@/components/providers/CollectionProvider";
export const metadata = {
  title: 'FiNANCiE Event - Get Reward for Joining Event',
  description: 'FiNANCiEイベントは、オンラインおよびオフラインのイベントを通じて人々をWeb3にオンボードするのを助けます。参加者はPOAPや追加のオンチェーン報酬を受け取ります。FiNANCiEポイントで購入されたコミュニティトークンの保有者には、限定イベントが予約されています。',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="header-fixed">
        <Web3ModalProvider>
          <CollectionProvider>
            {children}
          </CollectionProvider>
        </Web3ModalProvider>
      </body>
    </html>
  )
}
