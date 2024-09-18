import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';

export const PoliticasPrivacidad = () => {
  return (
    <>
      <section className="flex flex-col bg-gradient-to-br dark:to-zinc-800 dark:from-zinc-700">
        <MenuDesktop />
        <MenuMovil />
        <div className="mt-8 md:mt-28 flex flex-col px-8 lg:px-[200px] mb-[100px] dark:text-white">
          <h2 className="text-4xl font-bold md:pt-[100px]">
            Politicas de privacidad
          </h2>
          <p className="pt-[80px]">
            Esta Política de Privacidad describe cómo NextStep ,recopila,
            utiliza, almacena y comparte su información cuando accede y utiliza
            nuestra plataforma. Al usar nuestros servicios, aceptas las
            prácticas descritas en esta política.
          </p>
          <h3 className="font-bold pt-[30px]">
            1. Información que recopilamos
          </h3>
          <p>
            Recopilamos información que nos proporcionas directamente y de
            manera automática al interactuar con nuestra plataforma, tales como:
          </p>
          <p className="pt-[10px]">
            Información personal: Nombre, dirección de correo electrónico,
            número de teléfono, dirección postal, fecha de nacimiento y otra
            información de registro proporcionada voluntariamente.
          </p>

          <h3 className="font-bold pt-[30px]">2. Cómo usamos tu información</h3>
          <p>
            Utilizamos la información recopilada para:
            <ul className="list-disc px-[30px] pt-[10px]">
              <li> Proporcionar, personalizar y mejorar nuestros servicios.</li>
              <li>Procesar pagos y administrar tu cuenta.</li>
              <li>
                Enviar notificaciones y comunicaciones relevantes
                (actualizaciones de servicios, promociones, etc.).
              </li>
              <li>
                Mantener la seguridad de nuestra plataforma y prevenir el
                fraude.
              </li>
              <li>Cumplir con las obligaciones legales y normativas.</li>
            </ul>
          </p>
          <h3 className="font-bold pt-[30px]">
            3. Cómo compartimos tu información
          </h3>
          <p>
            No compartimos tu información personal con terctteros, excepto en
            las siguientes situaciones:
            <ul className="list-disc px-[30px] pt-[10px]">
              <li>
                {' '}
                Con proveedores de servicios externos: Para ayudarnos a operar
                nuestra plataforma, como servicios de pago, análisis de datos o
                marketing.
              </li>
              <li>
                PC con fines legales: Cuando sea necesario para cumplir con
                leyes, regulaciones o procesos legales, o para proteger los
                derechos y seguridad de nuestros usuarios o la Empresa.
              </li>
              <li>
                Con consentimiento: Si decidimos compartir información por algún
                otro motivo, te pediremos tu consentimiento explícito.
              </li>
            </ul>
          </p>
          <h3 className="font-bold pt-[30px]">4. Retención de datos</h3>
          <p>
            Conservamos tu información personal solo durante el tiempo necesario
            para cumplir con los fines descritos en esta política o según lo
            requiera la ley.
          </p>
          <h3 className="font-bold pt-[30px]">5. Tus derechos y opciones</h3>
          <p>
            Tienes el derecho de:
            <ul className="list-disc px-[30px] pt-[10px]">
              <li> Acceder a tu información personal.</li>
              <li>
                Solicitar la corrección de cualquier información inexacta o
                incompleta.
              </li>
              <li>
                Solicitar la eliminación de tu información, sujeto a ciertas
                excepciones.
              </li>
              <li>
                Retirar el consentimiento para el uso de datos cuando así lo
                desees.
              </li>
            </ul>
            <p className="pt-[20px]">
              Para ejercer cualquiera de estos derechos, puedes contactarnos a
              través de NextStep@gmail.com.
            </p>
          </p>
          <h3 className="font-bold pt-[30px]">
            6. Seguridad de la información
          </h3>
          <p>
            Adoptamos medidas de seguridad técnicas y organizativas para
            proteger tu información personal contra accesos no autorizados,
            pérdida o alteración. Sin embargo, ninguna transmisión por internet
            o almacenamiento electrónico es completamente segura, por lo que no
            podemos garantizar su seguridad absoluta.
          </p>
          <h3 className="font-bold pt-[30px]">
            7. Cambios en la Política de Privacidad
          </h3>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad
            en cualquier momento. Cualquier cambio será publicado en esta página
            y la fecha de la última actualización será revisada. Al continuar
            utilizando nuestros servicios, aceptas las actualizaciones de esta
            política.
          </p>
          <h3 className="font-bold pt-[30px]">8. Contacto</h3>
          <p>
            Si tienes preguntas o inquietudes sobre nuestra Política de
            Privacidad, puedes contactarnos a través de NextStep@gmail.com.
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
};
