import { Footer } from '@/Components/Footer';
import { MenuDesktop } from '@/Components/MenuDesktop';
import { MenuMovil } from '@/Components/MenuMovil';

export const TermimosServicios = () => {
  return (
    <>
      <section className="flex flex-col bg-gradient-to-br dark:to-zinc-800 dark:from-zinc-700">
        <MenuDesktop />
        <MenuMovil />
        <div className="mt-8 md:mt-28 flex flex-col px-8 lg:px-[200px] mb-[100px] dark:text-white">
          <h2 className="text-4xl font-bold md:pt-[100px]">
            Terminos y servicios
          </h2>
          <p className="pt-[80px]">
            Bienvenido a NextStep . Al acceder y utilizar nuestra plataforma,
            aceptas cumplir con los siguientes Términos y Condiciones de Uso
            ("Términos"). Por favor, léelos detenidamente.
          </p>
          <h3 className="font-bold pt-[30px]">1. Aceptación de los Términos</h3>
          <p>
            Al utilizar la plataforma, te comprometes a respetar estos Términos
            y cualquier política adicional publicada en nuestra página, como la
            Política de Privacidad. Si no estás de acuerdo con alguna parte de
            estos Términos, no deberás utilizar nuestros servicios.
          </p>
          <h3 className="font-bold pt-[30px]">2. Uso de la Plataforma</h3>
          <p>
            La plataforma NextStep está diseñada para conectar a empresas con
            emprendedores para la realización de tareas a corto plazo. Al
            registrarte y utilizar nuestros servicios, te comprometes a:
            <ul className="list-disc px-[30px] pt-[10px]">
              <li>Proporcionar información precisa y actualizada.</li>
              <li>
                Mantener la confidencialidad de tus credenciales de acceso.
              </li>
              <li>
                No utilizar la plataforma para actividades ilegales o no
                autorizadas.
              </li>
              <li>
                No reproducir, duplicar, copiar, vender o explotar ninguna parte
                de los servicios ofrecidos en la plataforma sin nuestra
                autorización expresa.
              </li>
            </ul>
          </p>
          <h3 className="font-bold pt-[30px]">3. Registro de Usuarios</h3>
          <p>
            Para utilizar ciertos servicios, deberás crear una cuenta en nuestra
            plataforma. Eres responsable de mantener la seguridad de tu cuenta y
            de cualquier actividad realizada bajo tu nombre de usuario. Nos
            reservamos el derecho de suspender o cancelar cuentas que violen
            estos Términos.
          </p>
          <h3 className="font-bold pt-[30px]">
            4. Contenido Generado por el Usuario
          </h3>
          <p>
            Al enviar contenido a la plataforma, como comentarios o sugerencias,
            nos otorgas una licencia no exclusiva, mundial, libre de regalías y
            transferible para utilizar, modificar, publicar y distribuir dicho
            contenido. Te comprometes a no subir contenido que sea ofensivo,
            ilegal o que infrinja derechos de terceros.
          </p>
          <h3 className="font-bold pt-[30px]">5. Pago y Facturación</h3>
          <p>
            Al contratar servicios o realizar transacciones dentro de la
            plataforma, te comprometes a proporcionar información de pago
            precisa y válida. Los precios y tarifas están sujetos a cambios, y
            te notificaremos sobre cualquier modificación antes de que se te
            aplique un nuevo precio.
          </p>
          <h3 className="font-bold pt-[30px]">6. Cancelación y Terminación</h3>
          <p>
            Puedes cancelar tu cuenta en cualquier momento a través de la
            configuración de usuario. Nos reservamos el derecho de suspender o
            cancelar tu acceso a la plataforma si violas estos Términos o
            participas en actividades fraudulentas o ilegales.
          </p>
          <h3 className="font-bold pt-[30px]">
            7. Limitación de Responsabilidad
          </h3>
          <p>
            La plataforma se proporciona "tal cual", sin garantías de ningún
            tipo. No nos hacemos responsables por pérdidas, daños o perjuicios
            derivados del uso o la imposibilidad de utilizar nuestros servicios,
            incluidos, entre otros, daños directos, indirectos o incidentales.
          </p>
          <h3 className="font-bold pt-[30px]">
            8. Modificaciones a los Términos
          </h3>
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier
            momento. Te notificaremos sobre cualquier cambio mediante la
            publicación de los Términos actualizados en nuestra plataforma. Al
            continuar utilizando nuestros servicios después de que las
            modificaciones entren en vigor, aceptas los nuevos Términos.
          </p>
          <h3 className="font-bold pt-[30px]">9. Propiedad Intelectual</h3>
          <p>
            Todos los derechos de propiedad intelectual sobre el contenido y los
            servicios ofrecidos en nuestra plataforma, incluyendo marcas,
            logotipos, y software, son propiedad exclusiva de NextStep o sus
            licenciantes. No se otorgan derechos sobre estos materiales, salvo
            lo dispuesto expresamente en estos Términos.
          </p>
          <h3 className="font-bold pt-[30px]">
            10. Ley Aplicable y Jurisdicción
          </h3>
          <p>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes
            de Nicaragua . Cualquier disputa que surja en relación con estos
            Términos será sometida a la jurisdicción exclusiva de los tribunales
            de Estelí.
          </p>
          <h3 className="font-bold pt-[30px]">11. Contacto</h3>
          <p>
            Si tienes preguntas o inquietudes sobre estos Términos, puedes
            contactarnos a través de NextStep@gmail.com .
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
};
