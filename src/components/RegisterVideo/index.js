import { createClient } from "@supabase/supabase-js"
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

const PROJECT_URL = "https://kogeewpqeeioubcagpkl.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZ2Vld3BxZWVpb3ViY2FncGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzUyNjYsImV4cCI6MTk4Mzc1MTI2Nn0.nw8zMvZs0prZPc4Y7WdqIm0Ovwz11_bN5aVCrC4qvQY";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);


// get youtube thumbnail from video url using Copilot
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}


export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "Jogo com JavaScript #01: Criando um Flappy Bird do ZERO!!!",
      url: "https://youtube.com/watch?v=jOAU81jdi-c",
    },
  })
  const [formVisivel, setFormVisivel] = React.useState(false)

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

            // Contrato entre o Front e o Backend
            supabase.from("video").insert({
              title: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumbnail(formCadastro.values.url),
              playlist: "jogos",
            }).then((dados) => {
              console.log(dados)
            }).catch((error) => {
              console.log(error)
            })

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
