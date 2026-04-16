import { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import projects from "../data/projects";

const designCategories = [
  { label: "Brand Identity", value: "brand-identity" },
  { label: "Digital & Web Design", value: "digital-web-design" },
  { label: "Campaigns & Art Direction", value: "campaigns-art-direction" },
  { label: "Editorial & Print", value: "editorial-print" },
  { label: "Packaging Design", value: "packaging-design" },
  { label: "Illustration", value: "illustration" }
];

const artCategories = [
  { label: "What is art?", value: "what-is-art" },
   { label: "New Media & Interactive", value: "new-media-interactive" },
  
];

function Projects() {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesType = !selectedType || project.type === selectedType;
      const matchesDiscipline =
        !selectedDiscipline || project.discipline === selectedDiscipline;
      const matchesCategory =
        !selectedCategory || project.categories.includes(selectedCategory);

      return matchesType && matchesDiscipline && matchesCategory;
    });
  }, [selectedType, selectedDiscipline, selectedCategory]);

  const getCount = (filterFn) => projects.filter(filterFn).length;

  const clearFilters = () => {
    setSelectedType(null);
    setSelectedDiscipline(null);
    setSelectedCategory(null);
  };

  return (
    <main className="page">
      <SiteHeader />

      <div className="page-content">
        <div className="subnav-wrapper">
          <nav className="subnav">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "subnav-link active" : "subnav-link"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/diaries"
              className={({ isActive }) =>
                isActive ? "subnav-link active" : "subnav-link"
              }
            >
              Diary
            </NavLink>
          </nav>
        </div>

        <div className="projects-layout">
          <button
            className="filters-toggle"
            onClick={() => setFiltersOpen((prev) => !prev)}
            aria-expanded={filtersOpen}
          >
            Filters
          </button>

          <aside className={`filters-panel ${filtersOpen ? "open" : ""}`}>
            <div className="filters-panel-inner">


              <div className="filters-simple">
                <div className="filter-block">
                  <button
                    className={selectedType === "commercial" ? "filter-line active" : "filter-line"}
                    onClick={() => setSelectedType(selectedType === "commercial" ? null : "commercial")}
                  >
                    <span>Commercial</span>
                    <span>{getCount((project) => project.type === "commercial")}</span>
                  </button>

                  <button
                    className={selectedType === "personal" ? "filter-line active" : "filter-line"}
                    onClick={() => setSelectedType(selectedType === "personal" ? null : "personal")}
                  >
                    <span>Personal</span>
                    <span>{getCount((project) => project.type === "personal")}</span>
                  </button>
                </div>

                <div className="filter-block">
                  <button
                    className={selectedDiscipline === "design" ? "filter-line active" : "filter-line"}
                    onClick={() => {
                      const nextValue = selectedDiscipline === "design" ? null : "design";
                      setSelectedDiscipline(nextValue);
                      if (nextValue !== "design" && designCategories.some(cat => cat.value === selectedCategory)) {
                        setSelectedCategory(null);
                      }
                    }}
                  >
                    <span>Design</span>
                    <span>{getCount((project) => project.discipline === "design")}</span>
                  </button>

                  <div className="filter-subgroup">
                    {designCategories.map((category) => (
                      <button
                        key={category.value}
                        className={selectedCategory === category.value ? "filter-line sub active" : "filter-line sub"}
                        onClick={() => {
                          setSelectedDiscipline("design");
                          setSelectedCategory(
                            selectedCategory === category.value ? null : category.value
                          );
                        }}
                      >
                        <span>{category.label}</span>
                        <span>
                          {getCount((project) =>
                            project.discipline === "design" &&
                            project.categories.includes(category.value)
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="filter-block">
                  <button
                    className={selectedDiscipline === "art" ? "filter-line active" : "filter-line"}
                    onClick={() => {
                      const nextValue = selectedDiscipline === "art" ? null : "art";
                      setSelectedDiscipline(nextValue);
                      if (nextValue !== "art" && artCategories.some(cat => cat.value === selectedCategory)) {
                        setSelectedCategory(null);
                      }
                    }}
                  >
                    <span>Art</span>
                    <span>{getCount((project) => project.discipline === "art")}</span>
                  </button>

                  <div className="filter-subgroup">
                    {artCategories.map((category) => (
                      <button
                        key={category.value}
                        className={selectedCategory === category.value ? "filter-line sub active" : "filter-line sub"}
                        onClick={() => {
                          setSelectedDiscipline("art");
                          setSelectedCategory(
                            selectedCategory === category.value ? null : category.value
                          );
                        }}
                      >
                        <span>{category.label}</span>
                        <span>
                          {getCount((project) =>
                            project.discipline === "art" &&
                            project.categories.includes(category.value)
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <button className="clear-filters" onClick={clearFilters}>
                  Clear filters
                </button>
              </div>
            </div>
          </aside>

          <div className="projects-main">
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="project-card"
                  onClick={() => setFiltersOpen(false)}
                >
                  <div className="project-thumb-wrap">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="project-thumb"
                    />
                  </div>
                  <div className="project-card-text">
                    <p className="project-card-title">{project.title}</p>
                    <p className="project-card-year">{project.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </main>
  );
}

export default Projects;