-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 13-06-2024 a las 18:39:44
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lab2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int NOT NULL,
  `descripcion` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `idMedicamento` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `familia`
--

CREATE TABLE `familia` (
  `id` int NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `idMedicamento` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listamedicamentos`
--

CREATE TABLE `listamedicamentos` (
  `id` int NOT NULL,
  `idPrescripcion` int NOT NULL,
  `idMedicamento` int NOT NULL,
  `dosis` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `duracion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicamentos`
--

CREATE TABLE `medicamentos` (
  `id` int NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `concentracion` varchar(40) NOT NULL,
  `formaFarmaceutica` varchar(40) NOT NULL,
  `presentacion` varchar(40) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `medicamentos`
--

INSERT INTO `medicamentos` (`id`, `nombre`, `concentracion`, `formaFarmaceutica`, `presentacion`, `estado`) VALUES
(31, 'Fluoxetina', '20mg', 'cápsulas', 'x14 unidades', 1),
(32, 'Paracetamol', '500mg', 'tabletas', 'x10 comprimidos', 1),
(33, 'Ibuprofeno', '400mg', 'tabletas', 'x10 comprimidos', 1),
(34, 'Diazepam', '5mg', 'grageas', 'x20 unidades', 1),
(35, 'Naproxeno', '275mg', 'cápsulas', 'x20 unidades', 1),
(36, 'Amoxicilina', '250mg', 'suspensión', 'x60 ml', 1),
(37, 'Cefalexina', '100mg', 'jarabe', 'x100 ml', 1),
(38, 'Citrion', '10mg', 'solución', 'x30 ml', 1),
(39, 'Clorpromazina', '25mg', 'inyectable', 'x5 ampollas', 1),
(40, 'Metoclopramida', '5mg', 'gotas', 'x15 ml', 1),
(41, 'Aspirina', '100mg', 'comprimidos', 'x30 unidades', 1),
(42, 'Loratadina', '5mg', 'tabletas', 'x15 comprimidos', 1),
(43, 'Atenolol', '50mg', 'tabletas', 'x30 comprimidos', 1),
(44, 'Omeprazol', '20mg', 'cápsulas', 'x28 unidades', 1),
(45, 'Furosemida', '40mg', 'tabletas', 'x20 comprimidos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `obrasocial`
--

CREATE TABLE `obrasocial` (
  `id` int NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `obrasocial`
--

INSERT INTO `obrasocial` (`id`, `nombre`) VALUES
(1, 'OSDE'),
(2, 'Swiss Medical'),
(3, 'Galeno'),
(4, 'Medifé'),
(5, 'IOMA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `id` int NOT NULL,
  `nombre` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `dni` int NOT NULL,
  `sexo` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `fechaNac` date NOT NULL,
  `email` varchar(40) NOT NULL,
  `idObraSocial` int DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id`, `nombre`, `apellido`, `dni`, `sexo`, `fechaNac`, `email`, `idObraSocial`, `estado`) VALUES
(1, 'Pedro', 'Gonzalez', 44344123, 'Masculino', '1978-09-10', 'pedroGonz@gmail.com', 2, 1),
(2, 'Santiago', 'Calivares', 43284123, 'Masculino', '1980-09-10', 'santiCali@gmail.com', 2, 1),
(3, 'Joaco', 'Jofre', 43393423, 'Masculino', '1980-09-10', 'joacoJ@gmail.com', 2, 1),
(4, 'Juan', 'Pérez', 42382976, 'Masculino', '1990-01-02', 'juanPerez@gmail.com', 1, 0),
(5, 'Paula', 'Ledesma', 43381576, 'Femenino', '2000-04-02', 'pauuLedesma@gmail.com', 3, 1),
(6, 'Jorge', 'Coronel', 41873466, 'Masculino', '2001-02-07', 'jorgeeC@gmail.com', 1, 1),
(7, 'Santiago', 'Romero', 41665746, 'Masculino', '1999-03-04', 'santiRom@gmail.com', 3, 1),
(8, 'Dario', 'Mansilla', 44536784, 'Masculino', '2002-02-01', 'mansilla@gmail.com', 5, 1),
(9, 'Gabriel', 'Becerra Diaz', 42768549, 'Masculino', '1998-04-10', 'gabiBecerra@gmail.com', 2, 1),
(10, 'Maria', 'Gustini', 36745689, 'Femenino', '1989-02-17', 'mariaG@gmail.com', 3, 1),
(11, 'Ines', 'Schuster', 37493421, 'Femenino', '1987-03-12', 'inesSchuster@gmail.com', 2, 1),
(12, 'Gonzalo', 'Olivera', 34627456, 'Masculino', '1988-11-17', 'gonzalo24@gmail.com', 1, 1),
(13, 'Agustina', 'Perez', 38657743, 'Femenino', '1989-08-05', 'AgusPZ@gmail.com', 4, 1),
(14, 'Romina', 'Cazeaux', 34657889, 'Femenino', '1984-11-20', 'RomiCaz23@gmail.com', 1, 1),
(15, 'Rodolfo', 'Ortiz', 39867544, 'Masculino', '1985-08-15', 'rOrtiz@gmail.com', 3, 1),
(16, 'Franco', 'Lucero', 41486755, 'Masculino', '1997-10-27', 'francoLeo@gmail.com', 3, 1),
(17, 'Agustin', 'Amaya', 44765894, 'Masculino', '2001-01-19', 'agustinPP@gmail.com', 1, 1),
(18, 'Lorenzo', 'Rodriguez', 42674855, 'Masculino', '1995-07-06', 'Lrodriguez@gmail.com', 2, 1),
(19, 'Gonzalo', 'Peñalotti', 43564700, 'Masculino', '2000-02-13', 'GPenalotti@gmail.com', 1, 1),
(20, 'Gustavo', 'Saez', 41567345, 'Masculino', '1998-07-23', 'gsaez@gmail.com', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan`
--

CREATE TABLE `plan` (
  `id` int NOT NULL,
  `idObra` int NOT NULL,
  `nombre` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `plan`
--

INSERT INTO `plan` (`id`, `idObra`, `nombre`) VALUES
(1, 1, 'Plan 210'),
(2, 1, 'Plan 310'),
(3, 2, 'Plan SMG20'),
(4, 2, 'Plan SMG30'),
(5, 3, 'Plan Azul'),
(6, 3, 'Plan Verde'),
(7, 4, 'Plan Básico'),
(8, 4, 'Plan Premium'),
(9, 5, 'Plan Joven'),
(10, 5, 'Plan Familiar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prescripcion`
--

CREATE TABLE `prescripcion` (
  `id` int NOT NULL,
  `idPaciente` int NOT NULL,
  `idPrestacion` int NOT NULL,
  `fechaPrestacion` date NOT NULL,
  `idProfesional` int NOT NULL,
  `diagnostico` text NOT NULL,
  `idMedicamento` int NOT NULL,
  `dosis` varchar(50) NOT NULL,
  `duracion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `prescripcion`
--

INSERT INTO `prescripcion` (`id`, `idPaciente`, `idPrestacion`, `fechaPrestacion`, `idProfesional`, `diagnostico`, `idMedicamento`, `dosis`, `duracion`) VALUES
(1, 1, 1, '2024-06-08', 3, 'Electrocardiograma', 31, '', ''),
(2, 2, 1, '2024-06-08', 3, 'Revision de ojos', 31, '', ''),
(3, 5, 2, '2024-06-10', 3, 'Ecografia por embarazo', 31, '', ''),
(4, 2, 3, '2024-06-10', 1, '2 Huesos rotos', 31, '', ''),
(5, 7, 12, '2024-06-11', 3, 'Ecocardiograma por problemas en el corazon', 35, '2 unidades por dia', 'Hasta que desaparezca el dolor'),
(6, 8, 20, '2024-06-11', 3, 'Diarrea cronica', 43, '1 comprimido al dia', '30 dias'),
(7, 9, 15, '2024-06-12', 3, 'Abdomen muy marcado', 32, '1 Comprimido al dia', '10 dias'),
(8, 13, 4, '2024-06-12', 3, 'Reposo', 42, '2 comprimidos al dia', 'Hasta que desaparezca el dolor'),
(9, 14, 8, '2024-06-12', 3, 'Reposo', 35, '1 capsula al dia', '7 dias'),
(10, 15, 9, '2024-06-12', 2, 'Reposo', 40, '3 gotas por dia', 'Hasta terminar el medicamento'),
(11, 16, 24, '2024-06-12', 2, 'Diabetico y salame', 39, '1 ampolla al dia', '5 dias'),
(12, 17, 12, '2024-06-12', 2, 'Chequeo medico', 33, '1 comprimido diario', '10 dias'),
(13, 18, 13, '2024-06-12', 2, 'Fatiga cronica, dolor en el pecho', 41, '2 comprimidos por dia', '15 dias'),
(14, 19, 1, '2024-06-12', 2, 'Chequeo medico', 37, '1 medida diaria', 'Hasta terminar el medicamento'),
(15, 20, 11, '2024-06-13', 2, 'Huesos fragiles', 35, '1 capsula al dia', '20 dias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestaciones`
--

CREATE TABLE `prestaciones` (
  `id` int NOT NULL,
  `estudio` varchar(50) NOT NULL,
  `parteCuerpo` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `prestaciones`
--

INSERT INTO `prestaciones` (`id`, `estudio`, `parteCuerpo`) VALUES
(1, 'Electrocardiograma', 'Torso'),
(2, 'Ecografia', 'Abdomen'),
(3, 'Radiografia', 'Brazo derecho'),
(4, 'Tomografia de Cuello', 'Cuello'),
(5, 'Tomografía computarizada de cráneo', 'Cráneo'),
(6, 'Resonancia magnética de columna lumbar', 'Columna lumbar'),
(7, 'Electrocardiograma', 'Corazón'),
(8, 'Colonoscopía', 'Intestino'),
(9, 'Gastroscopía', 'Estómago'),
(10, 'Mamografía', 'Mama'),
(11, 'Densitometría ósea', 'Huesos'),
(12, 'Ecocardiograma', 'Corazón'),
(13, 'Prueba de esfuerzo', 'Corazón'),
(14, 'Biopsia hepática', 'Hígado'),
(15, 'Laparoscopía', 'Abdomen'),
(16, 'Cistoscopía', 'Vejiga'),
(17, 'Uroflujometría', 'Tracto urinario'),
(18, 'Audiometría', 'Oído'),
(19, 'Timpanometría', 'Oído'),
(20, 'Endoscopía digestiva alta', 'Tracto digestivo'),
(21, 'Espirometría', 'Pulmones'),
(22, 'Ergometría', 'Corazón'),
(23, 'Holter de 24 horas', 'Corazón'),
(24, 'Test de tolerancia a la glucosa', 'Sangre'),
(25, 'Ecografía obstétrica', 'Útero'),
(26, 'Amniocentesis', 'Útero'),
(27, 'Electroencefalograma', 'Cerebro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE `profesionales` (
  `id` int NOT NULL,
  `nombre` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `apellido` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dni` int NOT NULL,
  `email` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `profesion` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `especialidad` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `matricula` int NOT NULL,
  `idRefeps` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id`, `nombre`, `apellido`, `dni`, `email`, `password`, `profesion`, `especialidad`, `matricula`, `idRefeps`, `estado`) VALUES
(1, 'Mauro', 'Moran', 45238756, 'mauroM@gmail.com', '1234', 'Medico', 'Neurocirujano', 67455, '', 1),
(2, 'Rodrigo', 'Laserna', 38456273, 'rLaserna@gmail.com', '12345', 'Medico', 'Cirujano', 67544, '', 1),
(3, 'Franco', 'Lafourcade', 39754632, 'fLafourcade@gmail.com', '123456', 'Medico', 'Oculista', 68466, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int NOT NULL,
  `nombre` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dni` int NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `rol` varchar(20) NOT NULL,
  `password` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `dni`, `apellido`, `email`, `rol`, `password`) VALUES
(1, 'Gabriel', 43491021, 'Melian', 'gabriel24@gmail.com', 'Usuario', '123456'),
(2, 'Emanuel', 41765843, 'Villar', 'eVillar@gmail.com', 'Usuario', '12234'),
(3, 'Rodrigo', 40457321, 'Villar', 'rVillar@gmail.com', 'Usuario', '122345');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMedicamento` (`idMedicamento`);

--
-- Indices de la tabla `familia`
--
ALTER TABLE `familia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMedicamento` (`idMedicamento`);

--
-- Indices de la tabla `listamedicamentos`
--
ALTER TABLE `listamedicamentos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMedicamento` (`idMedicamento`),
  ADD KEY `idPrescripcion` (`idPrescripcion`);

--
-- Indices de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `obrasocial`
--
ALTER TABLE `obrasocial`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idObraSocial` (`idObraSocial`);

--
-- Indices de la tabla `plan`
--
ALTER TABLE `plan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `plan_obraSocial` (`idObra`);

--
-- Indices de la tabla `prescripcion`
--
ALTER TABLE `prescripcion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPersona` (`idPaciente`),
  ADD KEY `idPrestacion` (`idPrestacion`),
  ADD KEY `matricula` (`idProfesional`),
  ADD KEY `idPaciente` (`idPaciente`),
  ADD KEY `idMedicamento_medicamento` (`idMedicamento`);

--
-- Indices de la tabla `prestaciones`
--
ALTER TABLE `prestaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `matricula` (`matricula`),
  ADD KEY `idRefeps` (`idRefeps`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `familia`
--
ALTER TABLE `familia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `listamedicamentos`
--
ALTER TABLE `listamedicamentos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `medicamentos`
--
ALTER TABLE `medicamentos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `obrasocial`
--
ALTER TABLE `obrasocial`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `paciente`
--
ALTER TABLE `paciente`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `plan`
--
ALTER TABLE `plan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `prescripcion`
--
ALTER TABLE `prescripcion`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `prestaciones`
--
ALTER TABLE `prestaciones`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `paciente`
--
ALTER TABLE `paciente`
  ADD CONSTRAINT `paciente_obraSocial` FOREIGN KEY (`idObraSocial`) REFERENCES `obrasocial` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `plan`
--
ALTER TABLE `plan`
  ADD CONSTRAINT `plan_obraSocial` FOREIGN KEY (`idObra`) REFERENCES `obrasocial` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `prescripcion`
--
ALTER TABLE `prescripcion`
  ADD CONSTRAINT `idMedicamento_medicamento` FOREIGN KEY (`idMedicamento`) REFERENCES `medicamentos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prescripcion_paciente` FOREIGN KEY (`idPaciente`) REFERENCES `paciente` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prescripcion_prestacion` FOREIGN KEY (`idPrestacion`) REFERENCES `prestaciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `prescripcion_profesional` FOREIGN KEY (`idProfesional`) REFERENCES `profesionales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
