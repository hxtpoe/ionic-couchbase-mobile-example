  package {
    'couchdb' :
    ensure => installed;
  }

  service {'couchdb' :
    ensure        => running,
    enable        => true,
    hasrestart    => true,
    hasstatus    => true
}
