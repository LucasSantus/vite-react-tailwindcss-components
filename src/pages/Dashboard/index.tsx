import { FC } from "react";
import { ModalAlert } from "../../components/Modal/ModalAlert";
import { ModalContent } from "../../components/Modal/ModalContent";
import { ModalDelete } from "../../components/Modal/ModalDelete";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import { ModalWarning } from "../../components/Modal/ModalWarning";

export const Dashboard: FC = () => {
  const handleOnClickConfirm = () => {
    console.log("selected click");
  };

  return (
    <div className="p-8">
      <div className="flex">
        {/* <Tooltip message="Modal de Deleção"> */}
        <ModalDelete
          textButton="Open Modal Delete"
          title="Are you sure?"
          description="Do you really want to delete these records? This process cannot be undone."
          onClickConfirm={handleOnClickConfirm}
        />
        {/* </Tooltip> */}

        <ModalAlert
          textButton="Open Modal Alert"
          title="Are you sure?"
          description="Do you really want to delete these records? This process cannot be undone."
          onClickConfirm={handleOnClickConfirm}
        />

        <ModalSuccess
          textButton="Open Modal Success"
          title="Good job!"
          description="You clicked the button!"
          onClickConfirm={handleOnClickConfirm}
        />

        <ModalWarning
          textButton="Open Modal Warning"
          title="Oops..."
          description="Something went wrong!"
          onClickConfirm={handleOnClickConfirm}
        />

        <ModalContent
          textButton="Open Modal Content"
          title="Are you sure?"
          description="Do you really want to delete these records? This process cannot be undone."
          onClickConfirm={handleOnClickConfirm}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          recusandae expedita in illo delectus, qui vitae sed quas aliquid
          dolorum, animi non quo eligendi veritatis accusamus iusto sunt
          quibusdam voluptas minima odio, fugit fugiat amet itaque accusantium.
          Illo qui facere dolor veniam sapiente recusandae saepe vitae, est
          temporibus ea ratione error molestiae rem. Necessitatibus, harum? Odit
          dolores cumque numquam iure reprehenderit blanditiis aliquid,
          veritatis quis maxime laborum eligendi minima, iusto tempore, incidunt
          culpa similique voluptatem tenetur. Provident ullam, autem molestiae
          ut modi illo doloribus, ex dolor soluta obcaecati perspiciatis
          corrupti aperiam neque repellendus sed excepturi beatae explicabo.
          Blanditiis sunt delectus laboriosam modi sit id perferendis, inventore
          quam nisi, recusandae quasi dolor sed ut repellendus corporis?
          Nesciunt dolorum exercitationem animi, corrupti excepturi soluta ad
          officiis! Explicabo blanditiis nisi magni quae nam ut dolorum nesciunt
          quasi adipisci nihil, distinctio iusto quaerat omnis corrupti fugiat
          similique sit rem neque! Sunt, magnam eos? Aut consequuntur quas
          veniam? Ullam, quam obcaecati, corporis nihil delectus aliquam
          maiores, sit nobis consectetur eius numquam esse quaerat reiciendis
          soluta. Porro ea, quisquam voluptatibus soluta cupiditate accusamus
          necessitatibus placeat nesciunt quaerat voluptatem tempora delectus
          molestiae ratione itaque illum? Maiores voluptatum consectetur
          praesentium rerum atque! Ipsum officia voluptatibus itaque illo
          reprehenderit praesentium laborum quaerat architecto, provident, natus
          blanditiis obcaecati eum qui porro vel sint! Facilis temporibus
          repellendus ad. Reprehenderit aliquid autem fugiat quasi magnam quos,
          delectus, necessitatibus voluptatem blanditiis vitae iure neque
          dignissimos? Nobis, dignissimos. Minus, ad. Et ipsum alias quasi amet
          optio, praesentium officia saepe porro sint totam tempore dolores.
          Similique iure suscipit nulla, debitis in iste pariatur consectetur
          magni sit. Rerum, quas quod! Temporibus itaque aliquam excepturi
          labore, sapiente explicabo nesciunt, qui eius ipsa, laudantium
          mollitia quas laborum voluptatibus amet pariatur laboriosam ea. Enim
          at accusantium, totam quis quasi expedita vero! Corporis, harum
          dolores praesentium esse odio quae dignissimos vero eligendi, quos
          quas corrupti vel beatae odit exercitationem tempora nemo delectus
          debitis error fugit ducimus. Incidunt fuga itaque alias molestias
          aliquam? Amet eveniet, cumque nemo enim sapiente aspernatur temporibus
          vel illo est harum ad. Rem hic, molestiae illo, doloribus dolorem fuga
          dolore, perspiciatis tempore officiis maxime doloremque ullam culpa
          mollitia facilis similique. Maiores, aperiam obcaecati nisi iste
          delectus commodi perspiciatis ducimus quidem dolores praesentium
          debitis voluptas nam harum assumenda eum sint dignissimos magni ullam
          consectetur inventore error temporibus! Enim natus nam architecto
          dolorem quidem commodi odit? Temporibus delectus a suscipit sit,
          magni, quo possimus enim reiciendis fugiat similique ea.
        </ModalContent>
      </div>
    </div>
  );
};
