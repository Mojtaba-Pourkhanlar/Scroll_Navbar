import React from "react";
import Navbar from "./frontEnd/components/Navbar";
import { navList } from "./frontEnd/components/navLink";

const AppContainer = () => {
  return (
    <div >
      <Navbar />

      <div className="container-lg" style={{ marginTop: "100px" }}>
        {navList.map((item) => (
          <div
            key={item.id}
            style={{
              height: "100%",
              border: "1px solid black",
              margin: "20px",
              padding: "20px",
            }}>
            <h1>{item.title}</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium qui commodi sed tempore nostrum facere earum impedit
              voluptatibus, iusto voluptate architecto officiis, eaque quidem
              aliquam obcaecati doloribus ducimus rerum a! Temporibus, totam
              minima ducimus neque nesciunt cupiditate sequi doloremque optio,
              impedit, maxime perferendis facere quae obcaecati asperiores
              consequatur officia aliquid! Quas ratione cupiditate iusto, facere
              atque voluptatum repudiandae id sunt. Labore quibusdam ab
              asperiores aliquam soluta, molestiae ratione tempora eligendi
              quidem blanditiis autem maxime dolor vitae dicta nostrum. Ducimus
              numquam ipsa, obcaecati quas doloremque corporis alias molestias
              quo nostrum pariatur? Perspiciatis, maxime? Dolorem veritatis
              voluptas repellendus nemo. Delectus libero reiciendis eius aperiam
              quaerat reprehenderit ipsam tempore fugiat recusandae voluptates.
              Inventore expedita totam possimus maxime sapiente officia saepe
              quaerat cupiditate veniam? Porro veritatis, enim dolor architecto
              vitae perspiciatis minus optio error dignissimos dolorem eveniet,
              a dicta repellendus placeat corrupti iste eaque culpa soluta
              eligendi nemo. Delectus esse accusantium quos modi reprehenderit?
              Laborum vel perferendis dolor sunt, placeat soluta accusantium
              obcaecati voluptates provident pariatur necessitatibus,
              perspiciatis nesciunt explicabo porro ducimus adipisci eligendi
              rerum saepe tenetur. Blanditiis dolore recusandae autem officia
              error nam! Debitis repudiandae, esse culpa enim quos minima iste
              tempore quidem officiis consequatur ullam deleniti? Eaque,
              molestias veniam. Corrupti delectus harum nihil ratione. Saepe,
              exercitationem magni corrupti quos quasi temporibus aspernatur. Ut
              harum voluptate cumque similique corrupti ducimus vero illo eius
              animi exercitationem numquam error ullam, vel quo impedit
              consequatur nisi deleniti. Minus sit est consequuntur suscipit
              voluptatibus aspernatur quod sapiente. Minus doloremque
              repellendus sint repudiandae labore totam recusandae molestiae,
              numquam eaque, facere dolorem, et similique accusantium rerum? Id
              illo nam qui magni sed culpa recusandae provident asperiores
              itaque? Harum, quos. Culpa nobis officia aspernatur dicta, facilis
              cumque aliquid quas obcaecati cum repellendus, pariatur quidem
              repellat quod optio expedita quisquam sint autem hic ex commodi!
              Ex nulla possimus beatae voluptatibus quis! Eos temporibus ducimus
              eius voluptates id mollitia, sit eum, quia iure similique maiores
              optio labore voluptatibus hic quisquam fugiat ratione inventore
              molestiae a. Unde quaerat culpa quod nemo explicabo debitis?
              Tempora non molestias consectetur asperiores nulla in a vero
              voluptatum numquam corporis minus et voluptatem dolore ducimus
              porro odio vel facere minima, doloribus, itaque dolorem nam sunt
              provident. Sed, architecto? Reiciendis illum alias dicta
              reprehenderit culpa! Non ipsam placeat cumque nihil eius maxime
              soluta? In, quia hic. Vitae ut assumenda facere ab. Nihil
              distinctio excepturi porro vitae aspernatur et fugiat! Eius enim
              ullam distinctio aperiam quos quo necessitatibus quam illo fuga
              dolorum! Ipsa rem porro voluptas quidem eligendi sunt et
              blanditiis neque labore facere, nostrum officiis, sit repellendus
              vero ratione. Eos maiores itaque quae commodi, hic iste omnis
              quibusdam ex vero id sit temporibus ipsam minus fuga, consequatur
              eveniet qui, accusamus nostrum incidunt eligendi distinctio
              laboriosam officia. Beatae, incidunt veritatis. Eligendi, delectus
              aperiam temporibus perferendis nostrum assumenda, iure, in
              distinctio enim ad nesciunt. Numquam, aut! Qui, non eaque vitae
              esse cumque repellendus quibusdam, magnam ratione odio dicta
              ducimus doloremque! Neque! Delectus dicta maiores natus numquam
              fugit, vel veritatis. Voluptatem nulla quas error labore! Modi
              necessitatibus dolorum ut nisi doloribus dolorem assumenda
              repellendus, consequuntur tenetur voluptate pariatur, officiis
              aliquid nihil repellat. Quibusdam praesentium id dicta porro
              tempora voluptas amet reiciendis. Eos sunt minima soluta nisi
              illum. Nobis animi incidunt tempora laborum numquam quo, quos
              fugit at odit eligendi magni molestiae sit.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppContainer;
