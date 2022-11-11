import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://kogeewpqeeioubcagpkl.supabase.co"
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZ2Vld3BxZWVpb3ViY2FncGtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzUyNjYsImV4cCI6MTk4Mzc1MTI2Nn0.nw8zMvZs0prZPc4Y7WdqIm0Ovwz11_bN5aVCrC4qvQY"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*")
    },
  }
}
