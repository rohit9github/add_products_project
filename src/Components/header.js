import { Link } from "react-router-dom";



function Header() {
    return (
        <>
            <div>
                <header className="topbar" data-navbarbg="skin5">
                    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
                        <div className="navbar-header" data-logobg="skin5">
                            {/* This is for the sidebar toggle which is visible on mobile only */}
                            <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>

                            <a className="navbar-brand" href="index.html">
                                {/* Logo icon */}
                                <b className="logo-icon p-l-10">
                                    {/*You can put here icon as well // <i class="wi wi-sunset"></i> //*/}
                                    {/* Dark Logo icon */}
                                    <img src="assets/images/logo-icon.png" alt="homepage" className="light-logo" />
                                </b>

                                <span className="logo-text">
                                    {/* dark Logo text */}
                                    <img src="assets/images/logo-text.png" alt="homepage" className="light-logo" />
                                </span>

                            </a>

                            <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
                        </div>

                        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">

                            <ul className="navbar-nav float-left mr-auto">
                                <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu font-24" /></a></li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="d-none d-md-block">Create New <i className="fa fa-angle-down" /></span>
                                        <span className="d-block d-md-none"><i className="fa fa-plus" /></span>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                                <li className="nav-item search-box"> <a className="nav-link waves-effect waves-dark" href="javascript:void(0)"><i className="ti-search" /></a>
                                    <form className="app-search position-absolute">
                                        <input type="text" className="form-control" placeholder="Search & enter" /> <a className="srh-btn"><i className="ti-close" /></a>
                                    </form>
                                </li>
                            </ul>

                            <ul className="navbar-nav float-right">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-bell font-24" />
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle waves-effect waves-dark" href id={2} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="font-24 mdi mdi-comment-processing" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown" aria-labelledby={2}>
                                        <ul className="list-style-none">
                                            <li>
                                                <div className>
                                                    {/* Message */}
                                                    <a href="javascript:void(0)" className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-success btn-circle"><i className="ti-calendar" /></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Event today</h5>
                                                                <span className="mail-desc">Just a reminder that event</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* Message */}
                                                    <a href="javascript:void(0)" className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-info btn-circle"><i className="ti-settings" /></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Settings</h5>
                                                                <span className="mail-desc">You can customize this template</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* Message */}
                                                    <a href="javascript:void(0)" className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-primary btn-circle"><i className="ti-user" /></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Pavan kumar</h5>
                                                                <span className="mail-desc">Just see the my admin!</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    {/* Message */}
                                                    <a href="javascript:void(0)" className="link border-top">
                                                        <div className="d-flex no-block align-items-center p-10">
                                                            <span className="btn btn-danger btn-circle"><i className="fa fa-link" /></span>
                                                            <div className="m-l-10">
                                                                <h5 className="m-b-0">Luanch Admin</h5>
                                                                <span className="mail-desc">Just see the my new admin!</span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/images/users/1.jpg" alt="user" className="rounded-circle" width={31} /></a>
                                    <div className="dropdown-menu dropdown-menu-right user-dd animated">
                                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-user m-r-5 m-l-5" /> My Profile</a>
                                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-wallet m-r-5 m-l-5" /> My Balance</a>
                                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-email m-r-5 m-l-5" /> Inbox</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="javascript:void(0)"><i className="ti-settings m-r-5 m-l-5" /> Account Setting</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="javascript:void(0)"><i className="fa fa-power-off m-r-5 m-l-5" /> Logout</a>
                                        <div className="dropdown-divider" />
                                        <div className="p-l-30 p-10"><a href="javascript:void(0)" className="btn btn-sm btn-success btn-rounded">View Profile</a></div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>

                <aside className="left-sidebar" data-sidebarbg="skin5" style={{backgroundColor : "#000"}}>
                    {/* Sidebar scroll*/}
                    <div className="scroll-sidebar">
                        {/* Sidebar navigation*/}
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav" className="p-t-30">
                                <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/" aria-expanded="false"><i className="mdi mdi-view-dashboard" /><span className="hide-menu">Dashboard</span></Link></li>
                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Forms </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/addAdmin" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add_Admin </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/viewAdmin" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View Admin</span></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Books </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/Addbook" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add_book </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/BookView" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View Book</span></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Category </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/add_category" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add Category </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/view_category" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View Category</span></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Sub-Category </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/add_subcategory" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add_subCategory </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/view_subcategory" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View_subCategory</span></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Brand </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/add_brand" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add_Brand </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/view_brand" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View_Brand</span></Link></li>
                                    </ul>
                                </li>

                                <li className="sidebar-item"> <a className="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="mdi mdi-receipt" /><span className="hide-menu">Products </span></a>
                                    <ul aria-expanded="false" className="collapse  first-level">
                                        <li className="sidebar-item"><Link to="/add_products" className="sidebar-link"><i className="mdi mdi-note-outline" /><span className="hide-menu"> Add_Products </span></Link></li>
                                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark sidebar-link" to="/view_products" aria-expanded="false"><i className="mdi mdi-border-inside" /><span className="hide-menu">View_Products</span></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* End Sidebar navigation */}
                    </div>
                    {/* End Sidebar scroll*/}
                </aside>

            </div>



        </>
    )
}

export default Header;