import Image from "next/image";

export default function Card() {
  return (
    <div className="card text-3xlmax-w-7xl mx-auto mt-7 px-2 sm:px-6 lg:px-8">
      <div class="grid grid-cols-5 gap-2">
        <div>
          <div className="bg-yellow-50 shadow rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src="https://images.unsplash.com/photo-1561136594-7f68413baa99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <p className="px-4 text-xl">
              <strong>Tomat</strong>
            </p>
            <p className="px-4 text-xl font-bold shadow rounded-full bg-yellow-300">
              Rp. 12.000
            </p>
            <div className="px-4 py-5 reading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae,
                abullam vel laborum tempore deserunt quas eveniet.
              </p>
              <p className="pt-2 font-bold">Vegetables Store</p>
              <p className="italic">Bantul, Jogjakarta</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-yellow-50 shadow rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src="https://images.unsplash.com/photo-1583506522440-b2639ef4c1d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <p className="px-4 text-xl">
              <strong>Cabai Merah</strong>
            </p>
            <p className="px-4 text-xl font-bold shadow rounded-full bg-yellow-300">
              Rp. 40.000
            </p>
            <div className="px-4 py-5 reading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae,
                abullam vel laborum tempore deserunt quas eveniet.
              </p>
              <p className="pt-2 font-bold">Vegetables Store</p>
              <p className="italic">Bantul, Jogjakarta</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-yellow-50 shadow rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <p className="px-4 text-xl">
              <strong>Kentang</strong>
            </p>
            <p className="px-4 text-xl font-bold shadow rounded-full bg-yellow-300">
              Rp. 12.000
            </p>
            <div className="px-4 py-5 reading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae,
                abullam vel laborum tempore deserunt quas eveniet.
              </p>
              <p className="pt-2 font-bold">Fresh Vegeta</p>
              <p className="italic">Pujon, Kab. Malang</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-yellow-50 shadow rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src="https://images.unsplash.com/photo-1437750635120-f98648c0fe03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFwcmlrYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <p className="px-4 text-xl">
              <strong>Paprika</strong>
            </p>
            <p className="px-4 text-xl font-bold shadow rounded-full bg-yellow-300">
              Rp. 17.000
            </p>
            <div className="px-4 py-5 reading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae,
                abullam vel laborum tempore deserunt quas eveniet.
              </p>
              <p className="pt-2 font-bold">Sandwich Store</p>
              <p className="italic">Surabaya</p>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-yellow-50 shadow rounded-lg overflow-hidden">
            <div className="bg-white">
              <img
                src="https://images.unsplash.com/photo-1593677457477-79596c98cfd4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGVnZ3BsYW50c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <p className="px-4 text-xl">
              <strong>Terong Ungu</strong>
            </p>
            <p className="px-4 text-xl font-bold shadow rounded-full bg-yellow-300">
              Rp. 10.000
            </p>
            <div className="px-4 py-5 reading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elitVitae,
                abullam vel laborum tempore deserunt quas eveniet.
              </p>
              <p className="pt-2 font-bold">RumahSayur</p>
              <p className="italic">Malang Kota</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
