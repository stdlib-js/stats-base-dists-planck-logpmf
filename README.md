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



<section class="usage">

## Usage

```javascript
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-planck-logpmf@v0.1.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-planck-logpmf@v0.1.1-deno/mod.js';
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
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import logpmf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-planck-logpmf@v0.1.1-deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, 0, 5, opts );
var lambda = uniform( 10, 0.1, 5.0, opts );

logEachMap( 'x: %d, λ: %0.4f, ln( P( X = x; λ ) ): %0.4f', x, lambda, logpmf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-planck-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-planck-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-planck-logpmf/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-planck-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-planck-logpmf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-planck-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-planck-logpmf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

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
