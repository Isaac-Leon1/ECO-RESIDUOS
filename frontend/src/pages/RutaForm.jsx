export default function RutaForm() {
  return (
    <div>
      <div className="flex justify-center gap-12 items-center">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold leading-6 text-black">
                Nombre de la ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Inicio de la Ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="empiezaEn"
                  id="empiezaEn"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Finalización de la Ruta
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="finalizaEn"
                  id="finalizaEn"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Horario desde:
              </label>
              <div className="mt-2.5">
              <input
                    type="time"
                    id="hora"
                    name="hora"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold leading-6 text-black">
                Horario hasta:
              </label>
              <div className="mt-2.5">
              <input
                    type="time"
                    id="hora"
                    name="hora"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </form>
        <div>
          <div>
            <h3 className="my-4 font-bold text-gray-900">Tipo de Residuos</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
              <li className="w-full rounded-t-lg">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Orgánico
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="react-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Inorgánico
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="my-4 font-bold text-gray-900">Días</h3>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white">
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="vue-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Lunes
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 "
                  />
                  <label
                    htmlFor="react-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 "
                  >
                    Martes
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="angular-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Miércoles
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="laravel-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Jueves
                  </label>
                </div>
              </li>
              <li className="w-full">
                <div className="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="laravel-checkbox"
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    Viernes
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block mx-auto mb-10 w-96 rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Actualizar Ruta
        </button>
      </div>
    </div>
  );
}
