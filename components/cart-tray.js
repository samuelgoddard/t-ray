import { useState, useEffect } from 'react'
import { useUpdateCartQuantityContext } from '@/context/store'
import Link from 'next/link'
import Image from 'next/image'
import Div100vh from 'react-div-100vh'
import { getCartSubTotal } from '@/helpers/shop-helpers'

export default function CartTray({ cart, checkoutUrl }) {
  const updateCartQuantity = useUpdateCartQuantityContext()
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setCartItems(cart)
    setSubtotal(getCartSubTotal(cart))
  }, [cart])

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity)
  }

  return (
    <Div100vh className="h-full p-5 md:p-10 flex flex-col">
      <span className="text-[16vw] md:text-[10vw] xl:text-[7.8vw] 2xl:text-[140px] font-display leading-none uppercase text-red dark:text-yellow text-center block mb-2 w-full">Bag</span>
      
      <div className="mb-8 w-full">
        <span className="block rounded-full border border-off-white dark:border-white font-mono uppercase px-3 py-1 text-center mx-auto text-xs relative overflow-hidden text-off-white dark:text-white">
          <span className={`flex flex-wrap space-x-3 h-[15px] justify-center`}>
            <span className="block h-[15px]">{cartItems.length} Items</span>
            <span className="block h-[15px]">&bull;</span>
            <span className="block h-[15px]">Free Delivery</span>
          </span>
        </span>
      </div>

      <hr className="border-off-white dark:border-white border-t w-full mb-8" />

      <div className="my-auto max-h-[60vh] h-full overflow-scroll bag-inner">
        { cartItems.length > 0 ? (
          <ul>
            {cartItems.map(item => (
              <li key={item.variantId} className="block mb-6 text-off-white dark:text-white">
                <div className="flex flex-wrap items-center">
                  <div className="w-[35%] bg-black bg-opacity-75 dark:bg-opacity-10 rounded-lg flex items-center justify-center py-4">
                    <div className="w-8/12 mx-auto">
                      <Image
                        src={item.productImage.originalSrc}
                        alt={item.productImage.altText}
                        layout="responsive"
                        className="w-full"
                        height={item.productImage.height}
                        width={item.productImage.width}
                      />
                    </div>
                  </div>

                  <div className="w-[65%] pl-10">
                    <Link href={`/products/${item.productHandle}`}>
                      <a className="block font-display uppercase text-base md:text-xl">
                        {item.productTitle}
                      </a>
                    </Link>

                    <span className="w-full mb-1 align-middle flex items-center text-sm md:text-base">
                      <span className="block">{item.variantTitle}</span><span className="inline-block text-[10px] mx-2">&bull;</span><span className="block">${item.variantPrice}</span>
                    </span>

                    <span className="w-full mb-2 flex items-center space-x-2">
                      { item.variantQuantity > 1 && (
                        <button className="block text-2xl" onClick={(e) => updateItem(item.variantId, item.variantQuantity - 1)}>-</button>
                      )}
                      <input
                        type="number"
                        id="variant-quantity"
                        name="variant-quantity"
                        value={item.variantQuantity}
                        onChange={(e) => updateItem(item.variantId, e.target.value)}
                        className="bg-white h-8 rounded-md text-off-black text-center w-8"
                      />
                      <button className="block text-xl" onClick={(e) => updateItem(item.variantId, item.variantQuantity + 1)}>+</button>
                    </span>

                    <span className="block">
                      <button
                        aria-label="delete-item"
                        className="underline text-[13px]"
                        onClick={() => updateItem(item.variantId, 0)}
                      >
                        Remove
                      </button>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span className="block">Dang, it's empty! Go bag some swag!</span>
        )}
      </div>

      <div className="border-off-white dark:border-white border-t border-b w-full mt-auto mb-8 text-off-white dark:text-white text-right">
        <span className="text-[18px] md:text-[20px] xl:text-[22px] font-display leading-none uppercase text-center inline-block py-3 px-3">Total</span>


        <span className="text-[18px] md:text-[20px] xl:text-[22px] font-display leading-none uppercase inline-block py-3 ml-auto text-right">{ subtotal === 0 ? <>$0</> : <>${subtotal}</>}</span>
      </div>

      <div className="w-full">
        <a href={checkoutUrl} className="relative block w-full text-white dark:text-off-black dark:hover:text-off-white hover:text-off-black font-display uppercase text-xl md:text-2xl xl:text-2xl group transition-colors ease-in-out duration-300">
          <span className="absolute z-10 inset-0 flex items-center justify-center">Checkout</span>
          <span className="block transition-colors ease-in-out duration-300 w-full text-red dark:text-yellow group-hover:text-yellow dark:group-hover:text-off-black z-0">
            <svg className="w-full" viewBox="0 0 403 113" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M201.5 113l-63.72-.001-12.055-.002-8.082-.003-6.251-.005-5.166-.007-4.438-.007-3.912-.01-3.511-.01-3.194-.012-2.936-.014-2.72-.015-2.54-.016-2.383-.018-2.247-.019-2.127-.02-2.022-.022-1.926-.024-1.84-.025-1.764-.026-1.692-.028-1.628-.029-1.568-.031-1.513-.032-1.462-.033-1.414-.035-1.37-.037-1.327-.038-1.29-.039-1.251-.041-1.218-.043-1.184-.044-1.154-.045-1.124-.047-1.095-.049-1.07-.05-1.043-.051-1.019-.053-.996-.055-.973-.056-.952-.058-.93-.059-.912-.061-.892-.062-.873-.064-.856-.066-.838-.067-.822-.069-.805-.071-.79-.072-.775-.074-.76-.075-.746-.077-.731-.079-.719-.081-.705-.082-.692-.084-.68-.086-.667-.088-.656-.089-.644-.091-.633-.093-.621-.095-.61-.097-.601-.099-.59-.1-.579-.102-.57-.105-.559-.106-.55-.108-.54-.111-.532-.112-.522-.114-.513-.117-.504-.118-.496-.121-.487-.123-.478-.124-.47-.128-.463-.129-.454-.132-.447-.134-.438-.136-.43-.139-.424-.141-.416-.144-.408-.146-.401-.149-.394-.151-.387-.154-.38-.157-.372-.159-.366-.163-.358-.165-.352-.168-.346-.171-.339-.174-.332-.177-.326-.18-.32-.184-.312-.187-.307-.19-.3-.194-.294-.197-.288-.201-.282-.205-.276-.209-.27-.213-.264-.217-.258-.221-.252-.225-.246-.23-.24-.235-.235-.24-.229-.244-.223-.25-.217-.255-.212-.26-.207-.267-.2-.272-.196-.279-.19-.285-.183-.292-.18-.3-.173-.306-.167-.314-.163-.323-.157-.332-.152-.34-.146-.35-.142-.361-.136-.371-.13-.384-.126-.395-.12-.409-.115-.423-.11-.438-.104-.455-.1-.473-.094-.493-.089-.514-.084-.538-.079-.565-.074-.594-.068-.627-.064-.665-.058-.709-.054-.758-.048-.818-.043-.89-.039-.976-.033-1.087-.028-1.23-.023-1.43-.018-1.723-.013-2.213-.008-3.243L0 65.992.002 39l.007-3.532.012-2.324.018-1.783.022-1.469.027-1.258.033-1.107.037-.992.043-.902.047-.829.053-.767.057-.716.063-.672.068-.632.073-.6.078-.569.083-.542.089-.518.093-.496.099-.476.103-.457.11-.442.113-.425.12-.41.124-.398.13-.385.135-.374.14-.362.146-.352.151-.342.157-.333.161-.324.167-.316.173-.308.178-.3.183-.293.189-.286.194-.28.2-.273.205-.268.211-.261.217-.256.222-.25.228-.246.234-.24.24-.236.245-.23.25-.227.258-.221.263-.218.269-.213.275-.21.28-.205.287-.202.294-.198.3-.194.305-.191.312-.188.318-.184.325-.18.33-.178.339-.175.344-.171.351-.169.358-.165.364-.163.372-.16.378-.157.386-.154.393-.152.4-.15.407-.146.414-.144.422-.142.43-.139.437-.137.445-.134.453-.132.461-.13.47-.127.476-.126.486-.123.494-.12.503-.12.512-.116.52-.115.53-.113.54-.11.548-.109.558-.106.568-.105.578-.103.587-.1.599-.1.609-.096.62-.096.63-.093.643-.091.653-.09.666-.088.678-.086.69-.084.703-.083.716-.08.73-.08.743-.078.758-.075.772-.075.788-.072.803-.07.819-.07.836-.067.852-.066.871-.065.889-.062.908-.062.928-.06.948-.057.97-.056.992-.055 1.015-.054 1.04-.051 1.064-.05 1.092-.05 1.12-.047 1.148-.045 1.18-.044 1.211-.043 1.247-.041 1.283-.04 1.322-.038L59.168.45l1.407-.035L62.03.38l1.504-.032 1.56-.031 1.617-.03L68.392.26l1.751-.026 1.828-.025 1.912-.024L75.89.163l2.11-.021 2.227-.02 2.36-.017 2.513-.017 2.69-.015 2.899-.014 3.149-.012 3.455-.01 3.842-.01 4.343-.008 5.032-.007 6.043-.005 7.708-.004 11.122-.002L161.246 0h101.269l13.204.002 8.503.004 6.475.004 5.309.007 4.539.007 3.986.009 3.568.01 3.24.012 2.973.013 2.753.015 2.567.016 2.406.018 2.268.019 2.145.02 2.038.022 1.94.023 1.854.025 1.775.026 1.704.027 1.637.03 1.577.03 1.522.031 1.469.034 1.422.035 1.376.036 1.335.038 1.295.039 1.257.04 1.223.043 1.19.044 1.158.045 1.129.046 1.1.049 1.073.05 1.048.05 1.022.054 1 .054.976.056.956.057.934.06.914.06.895.062.876.064.859.065.841.067.824.069.808.07.793.072.777.074.762.075.748.077.734.079.72.08.708.082.694.084.682.085.669.088.658.089.645.09.635.094.623.094.612.097.602.098.591.1.581.102.571.104.562.106.551.108.542.11.533.112.523.114.515.116.505.118.497.12.489.123.48.124.472.127.463.13.456.13.447.134.44.136.432.139.424.14.417.144.41.146.402.148.395.15.388.154.38.157.374.159.367.161.36.165.353.168.346.17.34.174.334.176.326.18.321.183.314.187.307.19.302.193.295.196.289.201.283.204.277.208.27.213.265.216.259.22.253.225.247.23.241.233.236.239.23.244.224.249.218.254.213.26.207.265.202.271.196.278.191.284.185.291.179.298.174.305.169.314.164.321.158.33.152.34.148.348.142.359.136.37.132.38.126.394.121.407.116.42.111.436.105.453.1.47.095.49.09.51.085.534.08.56.074.59.07.621.064.659.06.7.054.75.049.808.044.877.039.962.034 1.067.029 1.205.024 1.393.019 1.667.014 2.113.008 3.005.004 6.359-.001 29.18-.007 3.893-.011 2.449-.016 1.85-.022 1.509-.026 1.287-.032 1.128-.037 1.009-.041.915-.047.84-.052.776-.057.723-.062.678-.067.639-.072.604-.077.574-.083.546-.087.522-.093.499-.097.48-.103.46-.109.443-.113.428-.118.413-.124.4-.129.387-.134.375-.14.364-.145.353-.15.344-.155.334-.161.326-.166.317-.172.309-.177.302-.182.294-.188.287-.194.281-.199.274-.204.268-.21.263-.216.257-.221.251-.227.246-.233.241-.239.236-.244.232-.25.227-.256.222-.262.219-.268.214-.274.21-.28.206-.286.202-.292.199-.299.195-.304.191-.311.188-.318.185-.323.181-.331.178-.336.175-.344.172-.35.169-.356.166-.364.163-.37.161-.378.157-.384.155-.391.152-.399.15-.406.147-.413.144-.421.142-.429.14-.436.137-.444.135-.451.132-.46.13-.468.128-.476.126-.484.123-.493.122-.502.119-.51.117-.519.115-.528.113-.538.111-.547.109-.556.107-.567.104-.576.103-.586.102-.597.099-.607.097-.618.096-.629.093-.64.092-.652.09-.664.088-.676.086-.688.085-.701.083-.714.081-.728.08-.741.077-.755.076-.77.075-.785.073-.801.071-.816.069-.833.068-.85.066-.868.065-.886.063-.905.061-.925.06-.945.058-.966.057-.988.055-1.012.053-1.035.052-1.061.051-1.087.049-1.115.047-1.144.046-1.174.044-1.207.043-1.241.042-1.277.04-1.315.038-1.356.037-1.4.036-1.446.034-1.496.032-1.55.032-1.608.029-1.671.028-1.74.027-1.816.026-1.898.023-1.99.023-2.092.021-2.207.02-2.338.018-2.487.016-2.66.016-2.863.014-3.106.012-3.403.011-3.773.01-4.253.008-4.906.007-5.85.005-7.372.004-10.347.003-20.41.001H201.5z" fill="currentColor"/></svg>
          </span>
        </a>
      </div>
    </Div100vh>
  )
}