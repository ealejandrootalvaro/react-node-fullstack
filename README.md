cd back

-- Crear estructura base de datos
npm run knex migrate:latest

-- Insertar datos iniciales
npm run knex seed:run