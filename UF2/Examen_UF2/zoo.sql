--
-- Base de datos: `zoo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animals`
--

CREATE TABLE `animals` (
  `id` int(11) NOT NULL,
  `especie` varchar(50) NOT NULL,
  `sexe` varchar(50) NOT NULL,
  `any_naixement` varchar(50) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `continent` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `animals`
--

INSERT INTO `animals` (`id`, `especie`, `sexe`, `any_naixement`, `pais`, `continent`) VALUES
(1, 'Lleó', 'mascle', '16/12/2003', 'Angola', 'Àfrica'),
(2, 'Suricata', 'femella', '20/03/2020', 'Botswana', 'Àfrica'),
(3, 'Cóndor Andí', 'mascle', '11/11/1995', 'Xile', 'América'),
(4, 'Cangur', 'femella', '28/05/2015', 'Austràlia', 'Oceania'),
(5, 'Linx', 'mascle', '07/10/2015', 'Espanya', 'Europa'),
(6, 'Ós Bru', 'femella', '15/04/2010', 'Rússia', 'Europa'),
(7, 'Ós Panda', 'mascle', '22/05/2018', 'Xina', 'Àsia'),
(8, 'Faisà Verd', 'femella', '29/01/2013', 'Japó', 'Àsia');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animals`
--
ALTER TABLE `animals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;


