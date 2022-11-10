import React from "react"
import { StyledRegisterVideo } from "./styles"

//Custom Hook
function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues)

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value
      const name = event.target.name
      setValues({
        ...values,
        [name]: value,
      })
    },
    clearForm() {
      setValues({})
    }
  }
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "Hillsong Worship Best Praise Songs Collection 2022",
      url: "https://www.youtube.com/watch?v=Kh_nbJzEQbQ",
    },
  })
  const [formVisivel, setFormVisivel] = React.useState(true)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {/* Ternário */}
      {/* Operadores de Curto-circuito */}
      {formVisivel && (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            console.log(formCadastro.values)
            setFormVisivel(false)
            formCadastro.clearForm()
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />

            <input
              placeholder="URL"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  )
}
