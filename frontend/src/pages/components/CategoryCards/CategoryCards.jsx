import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryTh } from "../../../Services/category/categoryThunk";
import { Link } from "react-router-dom";

export default function CategoryCards() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryTh());
    }, []);

    const { category } = useSelector((state) => state.category);
    console.log(category);

    return (
        <>
            <div className="row gx-3">
                {category ? (
                    category.length > 0 &&
                    category.reduce((acc, cat, index) => {
                        const categoryLinks = {
                            Alimantaire: "/alimataire",
                            Amballage: "/amballage",
                            Divers: "/divers",
                            "Produits_d'entretiens": "/Produits_d'entretiens",
                        };
                        const colors = [
                            "primary",
                            "success",
                            "warning",
                            "danger",
                        ];
                        const cardColor = colors[index % colors.length];

                        const cardLink = categoryLinks[cat.name];

                        acc.push(
                            <div key={cat.id} className="col-md-6 mb-3">
                                <Link
                                    to={cardLink}
                                    className={`card text-white bg-${cardColor} rounded`}
                                >
                                    <div className="card-body p-4">
                                        <span>
                                            <i className="ti ti-layout-grid fs-8"></i>
                                        </span>
                                        <h3 className="card-title mt-3 mb-0 text-white">
                                            {cat.name}
                                        </h3>
                                        <h3 className="card-title mt-3 mb-0 text-white">
                                            {cat.parent}
                                        </h3>
                                        <p className="card-text text-white-50 fs-3 fw-normal">
                                            {cat.description}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        );

                        return acc;
                    }, [])
                ) : (
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="mb-3">
                                <h5 className="text-center">Chargement En cours</h5>
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

   