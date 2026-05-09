// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// AS CHAVES PRECISAM ESTAR ENTRE ASPAS
const supabaseUrl = 'https://xyz.supabase.co' 
const supabaseKey = 'sb_publishable_E9qeQlQvW-g2PzieXHdg6Q_vUj616_X'

export const supabase = createClient(supabaseUrl, supabaseKey)