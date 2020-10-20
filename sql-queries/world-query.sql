-- 1. Switch to world DB
use world;

-- 2. List all tables 
show tables;

-- 3. View the schema of all tables
describe city;
describe country;
describe countryLanguage;

-- 4. Select all rows from the tables
select * from city;
select * from countrylanguage;
select * from country;

-- 5. Select the codes of all countries from North America
select code from country where continent='North America';

-- 6. SUBQUERY: Select language details for English language for countries in North America. Additionally English must be an official language there.
select * from countrylanguage where language='English' and IsOfficial='T' and CountryCode in (select code from country where continent='North America');

-- 7. COUNT: Select count of cities
select count(*) from city;

-- 8. GROUP BY, ORDER BY, COUNT: Which country has highest number of cities?
-- select Name,Code2 from country group by Code2;

-- 9. WHERE, BETWEEN: Which language is its country’s official language and spoken by 80 to 90 percent of people?
select Language, CountryCode from countrylanguage where IsOfficial='T' and Percentage between 80 and 90;
select cl.Language,c.name from countrylanguage cl INNER JOIN country c where IsOfficial='T' and Percentage between 80 and 90 and cl.countrycode=c.code;

-- WHERE, COUNT: how many cities have been listed in Maharashtra district of India
select count(name) from city where district='Maharashtra';

-- WHERE, MAX, SUBQUERY: Which country has the maximum population (if population is taken as the population from the country table)
select Name from country where Population>= (select max(population) from country);

-- Using subquery: Find the maximum population of a country, then find the country with that population. Combine the two steps using a sub-query.
select Name from country where Population>= (select max(population) from country);

-- ORDER BY, LIMIT: Which country has the maximum population (if population is taken as the population from the country table)
select name from country order by population desc limit 1;

-- COUNT, GROUP BY, ORDER BY: Which language is spoken in the maximum number of countries?
-- select countrycode,language from countrylanguage group by CountryCode order by percentage;

-- WHERE (including filtering language), COUNT, GROUP BY, ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Efficient solution
select count(language) c,language from countrylanguage where isOfficial='T' and language in('German','russian','Chinese') group by language order by c desc limit 1;

-- WHERE (excluding filtering language), COUNT, GROUP BY, HAVING (filtering by language IN), ORDER BY: Among the following, which language is the official language of the most number of countries?
-- Languages to consider: German, Russian, Chinese
-- NOTE: Relatively inefficient solution



-- WHERE, AND (optionally INNER JOIN) How many countries in North America are there where English is the official language?
select count(name) from country where continent='North America' and code in (select countrycode from countrylanguage where language='English' and isOfficial='T');

-- SUBQUERY, WHERE, AND (optionally INNER JOIN), COUNT, GROUP BY: Who are the heads of state in countries in North America are there where English is the official language. How many such countries are under respective heads of state?
select Headofstate,name from country where continent='North America' and code in(select countrycode from countrylanguage where language='English' and Isofficial='T') ;

-- ORDER BY, LIMIT: Which city has the maximum population?
select name from city order by population desc limit 1;

-- SUBQUERY, MAX: Which city has the maximum population?
select name from city where population >=(select max(population) from city);

-- WHERE, NULL: How many row entries are there with any value in the country table being missing?


-- COUNT, WHERE, LIKE: How many countries are there whose name starts with I and ends with A?
select count(name) from country where name like 'I%A';

-- SUM, GROUP BY, ORDER BY, LIMIT: Which continent has least surface area?
select continent,sum(surfacearea) s from country group by continent order by s limit 1;

-- WHERE, ORDER BY: What are the top 5 languages spoken in India?
select language from countrylanguage where countrycode='IND' order by percentage desc limit 5;

-- COUNT, GROUP BY, ORDER BY: How many languages are spoken (as per data available) in each country? Present your results in descending order of number of languages spoken.
select count(language) l,countrycode from countrylanguage group by countrycode order by l desc;

-- WHERE, COUNT, GROUP BY: What is the count of countries for each unique combination of Government form and head of state?
select count(name) from country group by governmentform,headofstate

# More Queries (city table)
-- Find the least populated city.
-- Find all cities with a population above one million people.
-- Find all cities that begin with Kal.
-- Find all cities with a population in the range 670,000 to 700,000
-- Find the 10 most populated cities. Order the data by population from the most populated to the least populated city (descending order). Hint: limit the output with the LIMIT clause.
-- Find the 10 least populated cities. Order the data by population from the most populated to the least populated city (ascending order).
-- Find all Cities that belong to the New York District. Display the Name, District and Population fields.
-- Find the population of each district in the USA.

# More Queries (country table)
-- How many countries are in this table?
-- Which country has the largest population?
-- Which country has the smallest population?
-- Find all countries with a population above five million people.
-- Display the countries grouped by region. (limit to show only the first 40 records).
-- Display the countries grouped by continents. (limit to 40 records).
-- What is the average life expectancy of each of the continents?
-- Display the capital of each African country together with the countries population in ascending order.
-- What is the country with the largest surface area?
-- Display the surface area of each of the continents.
