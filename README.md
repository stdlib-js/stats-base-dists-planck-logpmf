<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the logarithm of the [probability mass function][pmf] (PMF) for a Planck (discrete exponential) distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a Planck random variable is defined as

<!-- <equation class="equation" label="eq:planck_pmf" align="center" raw="\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a Planck distribution."> -->

```math
\Pr(X = x, \lambda) = \begin{cases}(1 - e^{-\lambda})e^{-\lambda x} & \text{for } x = 0, 1, 2, \ldots \\ 0 & \text{otherwise} \end{cases}
```

<!-- </equation> -->

where `λ` is the shape parameter and `x` denotes the count of events in a quantized system.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-planck-logpmf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats-base-dists-planck-logpmf' );
```

#### logpmf( x, lambda )

Evaluates the logarithm of the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var y = logpmf( 4.0, 0.3 );
// returns ~-2.5502

y = logpmf( 2.0, 1.7 );
// returns ~-3.6017

y = logpmf( -1.0, 2.5 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, 0.0 );
// returns NaN

y = logpmf( 0.0, NaN );
// returns NaN
```

If provided a shape parameter `lambda` which is nonpositive number, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, -1.0 );
// returns NaN
```

#### logpmf.factory( lambda )

Returns a function for evaluating the logarithm of the [probability mass function][pmf] (PMF) of a Planck (discrete exponential) distribution with shape parameter `lambda`.

```javascript
var mylogpmf = logpmf.factory( 0.5 );
var y = mylogpmf( 3.0 );
// returns ~-2.4328

y = mylogpmf( 1.0 );
// returns ~-1.4328
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpmf` or `logcdf` functions is preferable to manually computing the logarithm of the `pmf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var uniform = require( '@stdlib/random-array-uniform' );
var logpmf = require( '@stdlib/stats-base-dists-planck-logpmf' );

var x = discreteUniform( 10, 0, 5 );
var lambda = uniform( 10, 0.1, 5.0 );

var y;
var i;
for ( i = 0; i < lambda.length; i++ ) {
    y = logpmf( x[ i ], lambda[ i ] );
    console.log( 'x: %d, λ: %d, ln( P( X = x; λ ) ): %d', x[ i ], lambda[ i ].toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/dists/planck/logpmf.h"
```

#### stdlib_base_dists_planck_logpmf( x, lambda )

Evaluates the natural logarithm of the [probability mass function][pmf] for a Planck (discrete exponential) distribution with input value `x` and shape parameter `lambda`.

```c
double out = stdlib_base_dists_planck_logpmf( 4.0, 0.3 );
// returns ~-2.5502
```

The function accepts the following arguments:

-   **x**: `[in] double` input value.
-   **lambda**: `[in] double` shape parameter.

```c
double stdlib_base_dists_planck_logpmf( const double x, const double lambda );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/dists/planck/logpmf.h"
#include "stdlib/math/base/special/round.h"
#include <stdlib.h>
#include <stdio.h>

static double random_uniform( const double min, const double max ) {
    double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
    return min + ( v*(max-min) );
}

int main( void ) {
    double x;
    double lambda;
    double y;
    int i;

    for ( i = 0; i < 25; i++ ) {
        x = stdlib_base_round( random_uniform( 0.0, 11.0 ) );
        lambda = random_uniform( 0.1, 5.0 );
        y = stdlib_base_dists_planck_logpmf( x, lambda );
        printf( "x: %.0f, λ: %lf, ln(P(X = x; λ)): %lf\n", x, lambda, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-planck-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-planck-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-planck-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-planck-logpmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-planck-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-planck-logpmf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-planck-logpmf/main/LICENSE

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

</section>

<!-- /.links -->
