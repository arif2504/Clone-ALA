import Image from 'next/image'

export default function Features() {

  const Feature = (props) => {
    return (
      <div>
        <p className="text-3xl text-gray-800 font-bold text-left leading-tight pt-2">
          {props.title}
        </p>
        <div className="text-gray-500 pt-4 pr-10 text-justify">
          {props.description}
        </div>
      </div>
    )
  }

  return (
    <div className="features text-3xlmax-w-7xl mx-auto mt-40 px-2 sm:px-6 lg:px-8">
      <p className="text-4xl text-gray-800 font-bold text-left leading-tight pt-2">
        Mengapa Harus ALA ?
      </p>
      <div className="text-gray-500 pt-4">
        Karena dengan tujuan kami memberdayakan pasar tradisional , setiap pedagang bisa bergabung sebagai mitra kami untuk bisa menjual produk sayur sayuran.
      </div>
      <p className="textFeature text-9xl font-bold text-yellow-300 text-left leading-tight opacity-40">
        FEATURES
      </p>

      <div class="pointFeature grid grid-flow-col grid-cols-3 grid-rows-2 gap-2">
        {/* Feature 1 */}
        <Feature
              title="Pengiriman Cepat"
              description="Kami mengutamakan pelayanan yang baik dengan pengiriman yang cepat." 
        />

        {/* Feature 2 */}
        <Feature
              title="Menghemat Waktu"
              description="Pengiriman cepat yang dapat menghemat waktu belanja kamu." 
        />

        {/* Feature 3 */}
        <Feature
              title="Transaksi Dimanapun"
              description="Kemudahan traksaksi akan mempermudahmu untuk belanja." 
        />

        {/* Feature 4 */}
        <Feature
              title="Pemrosesan Cepat"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae, abullam vel laborum tempore deserunt quas eveniet." 
        />

        {/* Image */}
        <div className="featurePicture max-w-7xl mt-7 mx-auto px-2 sm:px-6 lg:px-8">
        </div>
      </div>
    </div>
  );
}
